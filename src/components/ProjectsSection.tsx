import { Project, Tag } from "@/types/appwrite.d";
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
  const [tags, setTags] = useState<Tag[]>([]);
  const [filterVal, setFilterVal] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects(filterVal);
      setProjects(projectsData);
    }
    fetchProjects();
  }, [filterVal]);

  useEffect(() => {
    async function fetchTags() {
      const tagsData = await getTags();
      setTags(tagsData);
    }
    fetchTags();
  }, []);

  const tagsCollection = useMemo(() => {
    return createListCollection({
      items: tags || [],
      itemToString: (item) => item.tag,
      itemToValue: (item) => item.tag,
    });
  }, [tags]);

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
              <SelectItem item={t} key={t.$id}>
                #{t.tag}
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
