import SectionContainer from "../SectionContainer";
import { SimpleGrid, Tabs, Text, Spacer } from "@chakra-ui/react";

export default function DevelopmentContentSection() {
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
            <Tabs.Trigger value="members">Members</Tabs.Trigger>
            <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
            <Tabs.Trigger value="tasks">Settings</Tabs.Trigger>
          </Tabs.List>
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
