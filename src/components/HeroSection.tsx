import { Box, Button, Text, useToken } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import lightbulbLogo from "@/assets/lightbulb_logo.svg";

export default function HeroSection() {
  const [fillColor, strokeColor] = useToken("colors", ["outline", "main"]);

  return (
    <SectionContainer>
      <Box display="flex" gap={2} flexDirection="row">
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
          <img
            src={lightbulbLogo}
            style={{
              fill: fillColor,
              stroke: strokeColor,
              height: "214px",
              width: "214px",
            }}
          />
        </Box>
      </Box>
    </SectionContainer>
  );
}
