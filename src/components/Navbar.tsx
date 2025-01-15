import { Box, Spacer, Text, useToken } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import HaepapaLogo from "@/assets/HaepapaLogo";

export default function Navbar() {
  const [fillColor, strokeColor] = useToken("colors", ["main", "outline"]);
  return (
    <Box background="white" shadow="sm" display="flex" gap={2} padding={1}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <HaepapaLogo fillColor={fillColor} strokeColor={strokeColor} />
      </Box>
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
