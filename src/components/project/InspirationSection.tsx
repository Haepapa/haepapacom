import { Box, Text, SimpleGrid, useToken } from "@chakra-ui/react";
import SectionContainer from "../SectionContainer";
import HaepapacomInspiration from "@/assets/project/HaepapacomInspiration";

type IdeaSectionProps = {
  inspiration: string | null;
};

export default function InspirationSection({ inspiration }: IdeaSectionProps) {
  const paragraphs = (inspiration ?? "").split("\n");
  const [fillColor, strokeColor, greyColor] = useToken("colors", [
    "main",
    "outline",
    "grey",
  ]);
  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2}>
        <Box flex="1" display="flex" justifyContent="center">
          <HaepapacomInspiration
            fillColor={fillColor}
            strokeColor={strokeColor}
            greyColor={greyColor}
            width={200}
            height={200}
          />
        </Box>
        <Box display="flex" gap={2} flexDirection="column" flex="1">
          <Text fontWeight="bold" textStyle="xl" alignContent="center">
            The Inspiration
          </Text>
          {paragraphs.map((paragraph, index) => (
            <Text textStyle="sm" key={index} mb={4}>
              {paragraph}
            </Text>
          ))}
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}
