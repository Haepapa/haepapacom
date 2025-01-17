import { Project, TagsFilter } from "@/types/appwrite.d";
import SectionContainer from "./SectionContainer";
import getProjects from "@/actions/getProjects";
import getTags from "@/actions/getTags";
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
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { useMemo } from "react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tags, setTags] = useState<TagsFilter[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      setProjects(projectsData);
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    async function fetchTags() {
      const tagsData = await getTags();
      setTags(tagsData.map((t) => ({ tag: t.tag, value: t.tag, $id: t.$id })));
    }
    fetchTags();
  }, []);

  const tagsCollection = useMemo(() => {
    return createListCollection({
      items: tags.values || [],
      itemToString: (item) => item.name,
      itemToValue: (item) => item.name,
    });
  }, [state.value]);

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
          collection={frameworks}
          size="sm"
          background={"white"}
        >
          <SelectTrigger>
            <SelectValueText placeholder="Filter Projects" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.items.map((movie) => (
              <SelectItem item={movie} key={movie.value}>
                {movie.label}
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
