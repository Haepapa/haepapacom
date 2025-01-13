import { Box, Spacer, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import haepapaLogo from "../assets/haepapa_logo.svg";

export default function Navbar() {
  return (
    <Box background="white" shadow="sm" display="flex" gap={2} padding={1}>
      <img src={haepapaLogo} alt="My Icon" height="25px" width="25px" />
      <Text fontWeight="bold" textStyle="lg" alignContent="center">
        Haepapa
      </Text>
      <Spacer />
      <Text textStyle="sm" alignContent="center">
        About
      </Text>
      <Text textStyle="sm" alignContent="center">
        Projects
      </Text>
      <Text textStyle="sm" alignContent="center">
        Contact
      </Text>
      <ColorModeButton height="25px" width="25px" _hover={{ bg: "white" }} />
    </Box>
  );
}
