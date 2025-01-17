import { Project } from "@/types/appwrite.d";
import SectionContainer from "./SectionContainer";
import getProjects from "@/actions/getProjects";
import { useEffect, useState } from "react";
import { CardTemplate } from "./CardTemplate";
import { SimpleGrid } from "@chakra-ui/react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      setProjects(projectsData);
    }
    fetchProjects();
  }, []);

  return (
    <SectionContainer>
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
