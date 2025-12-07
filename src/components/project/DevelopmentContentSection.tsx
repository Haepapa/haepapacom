import SectionContainer from "../SectionContainer";
import {
  Tabs,
  Text,
  Spacer,
  Image,
  SimpleGrid,
  Flex,
  Link,
  Box,
} from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import getDiagramURLsByName from "@/actions/getDiagramURLsByName";
import { useEffect, useState } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import { Appwrite } from "@/lib/Appwrite";
import { Technology, Note, Task } from "@/types/appwrite.d";
import { GetDiagramURLsByNameType } from "@/types/actions";
import { LuExternalLink } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NotesDateFormater } from "@/util/NotesDateFormater";

type DevelopmentContentSectionProps = {
  name: string | null;
  technologies: Technology[] | null;
  notes: Note[];
  tasks: Task[];
};

export default function DevelopmentContentSection({
  name,
  technologies,
  notes,
  tasks,
}: DevelopmentContentSectionProps) {
  const [diagramURLs, setDiagramURLs] = useState<GetDiagramURLsByNameType[]>(
    []
  );
  const [technologyURLs, setTechnologyURLs] = useState<
    { name: string; url: string; link: string }[]
  >([]);
  const { colorMode } = useColorMode();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageName, setSelectedImageName] = useState<string | null>(
    null
  );

  // Fetch diagram URLs
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

  // Fetch technology URLs
  useEffect(() => {
    async function fetchTechnologyURLs() {
      if (!technologies) return;
      const urls = await Promise.all(
        technologies.map(async (t) => {
          const d = await getDiagramURLsByName({
            name: t.documentName,
            colorMode: colorMode || null,
            bucketID: Appwrite.bucket02ID,
          });
          if (d.length > 0) {
            return {
              name: t.name,
              url: d[0].url,
              link: t.link,
            };
          } else {
            return {
              name: t.name,
              url: "",
              link: t.link,
            };
          }
        })
      );
      setTechnologyURLs(urls);
    }
    fetchTechnologyURLs();
  }, [colorMode, technologies]);

  // open images
  const handleImageClick = (url: string, name: string) => {
    setSelectedImage(url);
    setSelectedImageName(name);
  };

  return (
    <SectionContainer>
      <DialogRoot size={"lg"}>
        <SimpleGrid minChildWidth="190px" gap={2} paddingBottom={4}>
          <Text as="h2" fontSize="lg" fontWeight="bold">
            Development Content
          </Text>
          <Spacer />
        </SimpleGrid>
        <SimpleGrid minChildWidth="190px" gap={4} textStyle="sm">
          <Tabs.Root defaultValue="diagrams">
            {/* ---------------------------------------------------------------------------------------- */}
            {/* Tabs */}
            {/* ---------------------------------------------------------------------------------------- */}
            <Tabs.List>
              {diagramURLs.length > 0 ? (
                <Tabs.Trigger value="diagrams">Diagrams</Tabs.Trigger>
              ) : null}
              {technologyURLs.length > 0 ? (
                <Tabs.Trigger value="technologies">Technologies</Tabs.Trigger>
              ) : null}
              {notes.length > 0 ? (
                <Tabs.Trigger value="notes">Notes</Tabs.Trigger>
              ) : null}
              {tasks.length > 0 ? (
                <Tabs.Trigger value="tasks">Tasks</Tabs.Trigger>
              ) : null}
            </Tabs.List>

            {/* ---------------------------------------------------------------------------------------- */}
            {/* Diagrams */}
            {/* ---------------------------------------------------------------------------------------- */}
            {diagramURLs.length > 0 ? (
              <Tabs.Content value="diagrams">
                <Flex gap="8" justify="flex-start" wrap="wrap">
                  {diagramURLs.map((d) => {
                    return (
                      <DialogTrigger minWidth={"70px"}>
                        <Image
                          src={d.url}
                          height="60px"
                          objectFit="contain"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleImageClick(d.url, d.name)}
                          margin={"auto"}
                        />
                        <Link
                          key={d.name}
                          onClick={() => handleImageClick(d.url, d.name)}
                        >
                          <Text fontWeight="semibold">{d.name}</Text>
                          <FaMagnifyingGlass />
                        </Link>
                      </DialogTrigger>
                    );
                  })}
                </Flex>
              </Tabs.Content>
            ) : null}

            {/* ---------------------------------------------------------------------------------------- */}
            {/* Technologies */}
            {/* ---------------------------------------------------------------------------------------- */}
            {technologyURLs.length > 0 ? (
              <Tabs.Content value="technologies">
                <Text paddingBottom={6}>
                  Below are a few of the technologies used on this project.
                </Text>
                <Flex gap="8" justify="flex-start" wrap="wrap">
                  {technologyURLs.map((t) => {
                    return (
                      <Flex
                        display={"flex"}
                        direction={"column"}
                        key={t.name}
                        gap={2}
                        justifySelf={"baseline"}
                      >
                        <Image src={t.url} height="50px" objectFit="contain" />
                        <Link href={t.link} key={t.name}>
                          <Text fontWeight="semibold">{t.name}</Text>
                          <LuExternalLink />
                        </Link>
                      </Flex>
                    );
                  })}
                </Flex>
              </Tabs.Content>
            ) : null}

            {/* ---------------------------------------------------------------------------------------- */}
            {/* Notes */}
            {/* ---------------------------------------------------------------------------------------- */}
            {notes.length > 0 ? (
              <Tabs.Content value="notes">
                <Flex gap="8" justify="flex-start" wrap="wrap">
                  {notes.map((n, i) => {
                    return (
                      <Flex
                        display={"flex"}
                        direction={"column"}
                        key={i}
                        gap={4}
                        justifySelf={"baseline"}
                        maxWidth={257}
                      >
                        <Text textStyle="sm" fontWeight="bold" textAlign="left">
                          {n.title}
                        </Text>
                        <Text textStyle="xs">{n.note}</Text>
                        <Text textStyle="xs" color={"grey"}>
                          {NotesDateFormater(n.$createdAt)}
                        </Text>
                      </Flex>
                    );
                  })}
                </Flex>
              </Tabs.Content>
            ) : null}

            {/* ---------------------------------------------------------------------------------------- */}
            {/* Tasks */}
            {/* ---------------------------------------------------------------------------------------- */}
            {tasks.length > 0 ? (
              <Tabs.Content value="tasks">
                <SimpleGrid columns={3} minChildWidth={250} gap={4}>
                  <Box order="1">
                    <Text paddingBottom={4}>To do</Text>
                    {tasks.map((t, i) => {
                      if (t.statuses.taskStatus === "to-do") {
                        return (
                          <Flex
                            display={"flex"}
                            direction={"column"}
                            key={i}
                            gap={4}
                            justifySelf={"baseline"}
                            maxWidth={257}
                          >
                            <Text
                              textStyle="sm"
                              fontWeight="bold"
                              textAlign="left"
                            >
                              {t.description}
                            </Text>
                            <Text textStyle="xs" color={"grey"}>
                              Priority: {t.priorities.priority}
                            </Text>
                          </Flex>
                        );
                      }
                    })}
                  </Box>
                  <Box order="2">
                    <Text paddingBottom={4}>In Progress</Text>
                    {tasks.map((t, i) => {
                      if (t.statuses.taskStatus === "in-progress") {
                        return (
                          <Flex
                            display={"flex"}
                            direction={"column"}
                            key={i}
                            gap={4}
                            justifySelf={"baseline"}
                            maxWidth={257}
                          >
                            <Text
                              textStyle="sm"
                              fontWeight="bold"
                              textAlign="left"
                            >
                              {t.description}
                            </Text>
                            <Text textStyle="xs" color={"grey"}>
                              Priority: {t.priorities.priority}
                            </Text>
                          </Flex>
                        );
                      }
                    })}
                  </Box>
                  <Box order="3">
                    <Text paddingBottom={4}>Complete</Text>
                    {tasks.map((t, i) => {
                      if (t.statuses.taskStatus === "complete") {
                        return (
                          <Flex
                            display={"flex"}
                            direction={"column"}
                            key={i}
                            gap={4}
                            justifySelf={"baseline"}
                            maxWidth={257}
                          >
                            <Text
                              textStyle="sm"
                              fontWeight="bold"
                              textAlign="left"
                            >
                              {t.description}
                            </Text>
                            <Text textStyle="xs" color={"grey"}>
                              Priority: {t.priorities.priority}
                            </Text>
                          </Flex>
                        );
                      }
                    })}
                  </Box>
                </SimpleGrid>
              </Tabs.Content>
            ) : null}
          </Tabs.Root>
        </SimpleGrid>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedImageName && selectedImageName}</DialogTitle>
          </DialogHeader>
          <DialogBody>
            {selectedImage && <img src={selectedImage} />}
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </SectionContainer>
  );
}
