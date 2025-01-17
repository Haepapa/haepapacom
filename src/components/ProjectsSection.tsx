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
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      setProjects(projectsData);
    }
    fetchProjects();
  }, []);

  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  });

  return (
    <SectionContainer>
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
