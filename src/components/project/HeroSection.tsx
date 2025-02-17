import {
  Box,
  Text,
  SimpleGrid,
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  Separator,
  Link,
} from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SectionContainer from "../SectionContainer";
import { DataListItem, DataListRoot } from "@/components/ui/data-list";
import { GoLightBulb } from "react-icons/go";
import { BsBrush } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { ProjectStatusHist, Tag } from "@/types/appwrite.d";
import { format } from "date-fns";

type HeroSectionProps = {
  title: string | null;
  description: string | null;
  status: string | null;
  statusDescription: string | null;
  updatedAt: string | null;
  tags: Tag[] | null;
  projectStatusHist: ProjectStatusHist[];
};

export default function HeroSection({
  title,
  description,
  status,
  statusDescription,
  updatedAt,
  tags,
  projectStatusHist,
}: HeroSectionProps) {
  const sortedStatusHist = projectStatusHist
    .sort(
      (a, b) =>
        new Date(a.statusStartMonth).getTime() -
        new Date(b.statusStartMonth).getTime()
    )
    .map((hist) => ({
      status: hist.status[0].status,
      statusStartMonth: format(new Date(hist.statusStartMonth), "MMMM yyyy"),
    }));
  const statusIconMap: { [key: string]: JSX.Element } = {
    Idea: <GoLightBulb />,
    Design: <BsBrush />,
    MVP: <GrValidate />,
    "In Progress": <HiOutlineRocketLaunch />,
  };

  const formattedUpdatedAt = updatedAt
    ? format(new Date(updatedAt), "EEEE, do MMMM yyyy")
    : "";

  return (
    <SectionContainer>
      <DrawerRoot>
        <SimpleGrid minChildWidth="190px" gap={4}>
          <Box display="flex" gap={2} flexDirection="column" flex="1">
            <Text fontWeight="bold" textStyle="xl" alignContent="center">
              {title}
            </Text>
            <Text textStyle="sm">{description}</Text>
            <Text>
              {tags?.map((t, index) => (
                <Text key={index} textStyle="sm" fontWeight="bold">
                  #{t.tag}
                </Text>
              ))}
            </Text>
          </Box>
          <Box flex="1" display="flex" justifyContent="left" paddingTop={9}>
            <DataListRoot orientation="horizontal" gap={2}>
              <DataListItem
                textStyle="sm"
                key={"status"}
                label={"Status"}
                info={statusDescription}
                value={
                  <>
                    {status}{" "}
                    <DrawerTrigger asChild>
                      <Link
                        color={"black"}
                        fontWeight={"normal"}
                        fontSize={"xs"}
                      >
                        {" "}
                        view history
                      </Link>
                    </DrawerTrigger>
                  </>
                }
              />
              <DrawerBackdrop />

              <DrawerContent background={"background"}>
                <DrawerHeader>
                  <DrawerTitle>Project History</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                  <p>
                    <TimelineRoot maxW={140}>
                      {sortedStatusHist.map((hist, index) => (
                        <TimelineItem key={index}>
                          <TimelineConnector>
                            {statusIconMap[hist.status] || <GoLightBulb />}
                            {index !== sortedStatusHist.length - 1 && (
                              <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="top"
                                height="100%"
                                marginTop={2}
                              >
                                <Separator orientation="vertical" height="9" />
                              </Box>
                            )}
                          </TimelineConnector>
                          <TimelineContent>
                            <TimelineTitle>{hist.status}</TimelineTitle>
                            <TimelineDescription>
                              {hist.statusStartMonth}
                            </TimelineDescription>
                          </TimelineContent>
                        </TimelineItem>
                      ))}
                    </TimelineRoot>
                  </p>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
                <DrawerCloseTrigger />
              </DrawerContent>
              <DataListItem
                textStyle="sm"
                key={"updatedAt"}
                label={"Updated"}
                value={formattedUpdatedAt}
              />
            </DataListRoot>
          </Box>
        </SimpleGrid>
      </DrawerRoot>
    </SectionContainer>
  );
}
