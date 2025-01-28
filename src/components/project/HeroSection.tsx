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
} from "@chakra-ui/react";
import SectionContainer from "../SectionContainer";
import { DataListItem, DataListRoot } from "@/components/ui/data-list";
import { GoLightBulb } from "react-icons/go";
import { BsBrush } from "react-icons/bs";
import { ProjectStatusHist } from "@/types/appwrite.d";

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
            <DataListItem
              textStyle="sm"
              key={"updatedAt"}
              label={"Updated at"}
              value={updatedAt}
            />
          </DataListRoot>
        </Box>
        <Box flex="1" display="flex" justifyContent="center">
          <TimelineRoot>
            <TimelineItem>
              <TimelineConnector>
                <GoLightBulb />
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="80%"
                >
                  <Separator orientation="vertical" height="10" />
                </Box>
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle>Idea</TimelineTitle>
                <TimelineDescription>November 2024</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector>
                <BsBrush />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle>Design</TimelineTitle>
                <TimelineDescription>Decemberr 2024</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}
