import { Project } from "@/types/appwrite.d";
import SectionContainer from "./SectionContainer";
import getProjects from "@/actions/getProjects";
import { useEffect, useState } from "react";
import { CardTemplate } from "./CardTemplate";
import {
  SimpleGrid,
  Spacer,
  Text,
  createListCollection,
  Box,
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { useMemo } from "react";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

export default function ProjectsSection() {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [filterVal, setFilterVal] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch projects
  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      const data = await getProjects(filterVal);
      const allTags = data.map((p) => p.tags.map((t) => t.tag)).flat();
      const uniqueTagsArray = Array.from(new Set(allTags.map((tag) => tag)))
        .map((value) => allTags.find((tag) => tag === value)!)
        .sort();
      setTags(uniqueTagsArray);
      setProjectsData(data);
      setLoading(false);
    };
    const timer = setTimeout(() => {
      fetchProjects();
    }, 1000);

    // Set a maximum loading time of 10 seconds
    const timeout = setTimeout(() => {
      if (isMounted && loading) {
        setError("Loading timed out. Please try again later.");
        setLoading(false);
      }
    }, 10000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      clearTimeout(timeout);
    };
  }, [loading]);

  // Create tags collection
  const tagsCollection = useMemo(() => {
    return createListCollection({
      items: tags || [],
      itemToString: (item) => item,
      itemToValue: (item) => item,
    });
  }, [tags]);

  // useEffect for filtering projects
  useEffect(() => {
    if (filterVal.length > 0) {
      const filteredProjects = projectsData.filter((project) =>
        project.tags.some((tag) => filterVal.includes(tag.tag))
      );
      setProjects(filteredProjects);
    } else {
      setProjects(projectsData);
    }
  }, [filterVal, projectsData]);

  return (
    <SectionContainer>
      {/* Heading and Filter */}
      <SimpleGrid minChildWidth="190px" gap={2} paddingBottom={4}>
        <Text as="h2" fontSize="md" fontWeight="bold">
          What we are working on
        </Text>
        <Spacer />
        <SelectRoot
          multiple
          onValueChange={({ value }) => setFilterVal(value)}
          collection={tagsCollection}
          size="sm"
          background={"white"}
        >
          <SelectTrigger>
            <SelectValueText placeholder="Filter Projects" />
          </SelectTrigger>
          <SelectContent>
            {tagsCollection.items.map((t) => (
              <SelectItem item={t} key={t}>
                #{t}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </SimpleGrid>

      {/* Projects */}
      <SimpleGrid minChildWidth="190px" gap={2}>
        {loading ? (
          <ProgressRoot maxW="400px" value={null} alignSelf={"center"}>
            <ProgressBar />
          </ProgressRoot>
        ) : error ? (
          <CardTemplate
            title={"Error loading projects. Please try again later."}
            description={error || ""}
          />
        ) : projects.length === 0 ? (
          <CardTemplate
            title={
              "Projects will be shown here as they become available. Check back soon!"
            }
          />
        ) : (
          <Box>
            {projects.map((project) => (
              <CardTemplate
                title={project.title}
                description={project.description}
                hashtags={project.tags.map((tag) => `#${tag.tag}`).join(" ")}
                SvgComponent={null}
                onClick={() => navigate(`/project/${project.$id}`)}
              />
            ))}
          </Box>
        )}
      </SimpleGrid>
    </SectionContainer>
  );
}
