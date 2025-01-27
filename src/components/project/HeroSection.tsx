import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import SectionContainer from "../SectionContainer";
import { DataListItem, DataListRoot } from "@/components/ui/data-list";

type HeroSectionProps = {
  title: string | null;
  description: string | null;
  status: string | null;
  statusDescription: string | null;
  updatedAt: string | null;
};

export default function HeroSection({
  title,
  description,
  status,
  statusDescription,
  updatedAt,
}: HeroSectionProps) {
  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2}>
        <Box display="flex" gap={2} flexDirection="column" flex="1">
          <Text fontWeight="bold" textStyle="lg" alignContent="center">
            {title}
          </Text>
          <Text textStyle="xs">{description}</Text>
        </Box>
        <Box flex="1" display="flex" justifyContent="center">
          <DataListRoot orientation="horizontal" gap={2}>
            <DataListItem
              textStyle="xs"
              key={"status"}
              label={"Status"}
              info={statusDescription}
              value={status}
            />
            <DataListItem
              textStyle="xs"
              key={"updatedAt"}
              label={"Updated at"}
              value={updatedAt}
            />
          </DataListRoot>
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}
