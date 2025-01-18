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
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { useMemo } from "react";

export default function ProjectsSection() {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [filterVal, setFilterVal] = useState<string[]>([]);

  // Fetch projects
  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects(filterVal);
      const allTags = data.map((p) => p.tags.map((t) => t.tag)).flat();
      const uniqueTagsArray = Array.from(new Set(allTags.map((tag) => tag)))
        .map((value) => allTags.find((tag) => tag === value)!)
        .sort();
      setTags(uniqueTagsArray);
      setProjectsData(data);
    }
    fetchProjects();
  }, []);

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
        <Text fontSize="md" fontWeight="bold">
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
        {projects.map((project) => (
          <CardTemplate
            title={project.title}
            description={project.description}
            hashtags={project.tags.map((tag) => `#${tag.tag}`).join(" ")}
            SvgComponent={null}
          />
        ))}
      </SimpleGrid>
    </SectionContainer>
  );
}
