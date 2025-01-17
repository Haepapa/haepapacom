import { Box, Button, Text, useToken, SimpleGrid } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import LightbulbIcon from "@/assets/LightbulbIcon";

export default function HeroSection() {
  const [fillColor, strokeColor] = useToken("colors", ["main", "outline"]);

  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2}>
        <Box display="flex" gap={2} flexDirection="column" flex="1">
          <Text fontWeight="bold" textStyle="lg" alignContent="center">
            We Turn Ideas into Real Solutions
          </Text>
          <Text textStyle="xs">
            At Haepapa, we’re all about building cool stuff and teaming up to
            create solutions that make a difference. Whether it’s automating
            tasks, solving interesting problems, or learning something new, we
            love turning ideas into reality.
          </Text>
          <Text textStyle="xs">
            Explore our projects and jump in and contribute—we’d love to have
            you on board!
          </Text>
          <Button
            variant="surface"
            textStyle="xs"
            background="main"
            _hover={{ shadow: "button" }}
            width="fit-content"
            height="fit-content"
            padding={1.5}
            color="buttonText"
          >
            Explore
          </Button>
        </Box>
        <Box flex="1" display="flex" justifyContent="center">
          <LightbulbIcon fillColor={fillColor} strokeColor={strokeColor} />
        </Box>
      </SimpleGrid>
    </SectionContainer>
  );
}
