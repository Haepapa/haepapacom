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
  DrawerActionTrigger,
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
import { ProjectStatusHist } from "@/types/appwrite.d";
import { format } from "date-fns";

type HeroSectionProps = {
  title: string | null;
  description: string | null;
  status: string | null;
  statusDescription: string | null;
  updatedAt: string | null;
  projectStatusHist: ProjectStatusHist[];
};

export default function HeroSection({
  title,
  description,
  status,
  statusDescription,
  updatedAt,
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
  console.log(sortedStatusHist);

  const statusIconMap: { [key: string]: JSX.Element } = {
    Idea: <GoLightBulb />,
    Design: <BsBrush />,
    MVP: <GrValidate />,
  };

  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={4}>
        <Box display="flex" gap={2} flexDirection="column" flex="1">
          <Text fontWeight="bold" textStyle="xl" alignContent="center">
            {title}
          </Text>
          <Text textStyle="sm">{description}</Text>
          <DataListRoot orientation="horizontal" gap={2}>
            <DataListItem
              textStyle="sm"
              key={"status"}
              label={"Status"}
              info={statusDescription}
              value={status}
            />
            <DrawerRoot>
              <DrawerBackdrop />
              <DrawerTrigger asChild>
                <Link color={"black"}>History</Link>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer Title</DrawerTitle>
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
            </DrawerRoot>
            <DataListItem
              textStyle="sm"
              key={"updatedAt"}
              label={"Updated at"}
              value={updatedAt}
            />
          </DataListRoot>
        </Box>
        <Box flex="1" display="flex" justifyContent="left">
          Test
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}
