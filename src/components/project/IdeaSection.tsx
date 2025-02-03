import { Box, Text, SimpleGrid, useToken } from "@chakra-ui/react";
import SectionContainer from "../SectionContainer";
import LightbulbIcon from "@/assets/LightbulbIcon";

type IdeaSectionProps = {
  idea: string | null;
};

export default function IdeaSection({ idea }: IdeaSectionProps) {
  const paragraphs = (idea ?? "").split("\n");
  const [fillColor, strokeColor] = useToken("colors", ["main", "outline"]);
  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={4}>
        {" "}
        <Box display="flex" gap={2} flexDirection="column" flex="1">
          <Text fontWeight="bold" textStyle="xl" alignContent="center">
            The Idea
          </Text>
          {paragraphs.map((paragraph, index) => (
            <Text textStyle="sm" key={index} mb={4}>
              {paragraph}
            </Text>
          ))}
        </Box>
        <Box flex="1" display="flex" justifyContent="center">
          <LightbulbIcon fillColor={fillColor} strokeColor={strokeColor} />
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}
