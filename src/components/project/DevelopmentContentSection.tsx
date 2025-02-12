import SectionContainer from "../SectionContainer";
import { SimpleGrid, Tabs, Text, Spacer } from "@chakra-ui/react";
import getDiagramURLsByName from "@/actions/getDiagramURLsByName";
import { useEffect, useState } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import { Appwrite } from "@/lib/Appwrite";
import { Technology } from "@/types/appwrite.d";

type DevelopmentContentSectionProps = {
  name: string | null;
  technologies: Technology[] | null;
};

export default function DevelopmentContentSection({
  name,
  technologies,
}: DevelopmentContentSectionProps) {
  const [diagramURLs, setDiagramURLs] = useState<string[][]>([]);
  const [technologyURLs, setTechnologyURLs] = useState<string[][]>([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    async function fetchDiagramURLs() {
      const urls = await getDiagramURLsByName({
        name: name + "_diagram",
        colorMode: colorMode || null,
      });
      setDiagramURLs(urls);
    }
    fetchDiagramURLs();
  }, [colorMode]);

  useEffect(() => {
    async function fetchTechnologyURLs() {
      if (!technologies) return;
      const urls = await Promise.all(
        technologies.map(async (t) => {
          return await getDiagramURLsByName({
            name: t.documentName,
            colorMode: colorMode || null,
            bucketID: Appwrite.bucket02ID,
          });
        })
      );
      console.log("technologyURLs", urls);
      setTechnologyURLs(urls.flat());
      console.log("technologyURLs", technologyURLs);
    }
    fetchTechnologyURLs();
  }, [colorMode, technologies]);

  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2} paddingBottom={4}>
        <Text as="h2" fontSize="lg" fontWeight="bold">
          Development Content
        </Text>
        <Spacer />
      </SimpleGrid>
      <SimpleGrid minChildWidth="190px" gap={4} textStyle="sm">
        <Tabs.Root defaultValue="members">
          <Tabs.List>
            {diagramURLs.length > 0 ? (
              <Tabs.Trigger value="diagrams">Diagrams</Tabs.Trigger>
            ) : null}
            <Tabs.Trigger value="members">Members</Tabs.Trigger>
            <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
            <Tabs.Trigger value="tasks">Settings</Tabs.Trigger>
          </Tabs.List>

          {diagramURLs.length > 0 ? (
            <Tabs.Content value="diagrams">
              {diagramURLs.map((d) => {
                return (
                  <>
                    <Text fontWeight="semibold">{d[1]}</Text>
                    <img src={d[0]} />
                  </>
                );
              })}
            </Tabs.Content>
          ) : null}
          <Tabs.Content value="members">Manage your team members</Tabs.Content>
          <Tabs.Content value="projects">Manage your projects</Tabs.Content>
          <Tabs.Content value="tasks">
            Manage your tasks for freelancers
          </Tabs.Content>
        </Tabs.Root>
      </SimpleGrid>
    </SectionContainer>
  );
}
