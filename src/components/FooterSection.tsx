import SectionContainer from "./SectionContainer";
import { Flex, Separator, Stack, Text, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <SectionContainer>
      <Stack paddingBottom={2}>
        <Separator size={"sm"} variant="solid" borderColor={"black"} />
        <Flex gap={4} justify="center" align="center" textStyle={"sm"}>
          <Link color={"black"} to="/terms-of-use">
            Terms of Use
          </Link>
          <Link color={"black"} to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link color={"black"} to="/cookies">
            Cookies
          </Link>
          <Spacer />
          <Text>Copyright 2025 Haepapa. All rights reserved.</Text>
        </Flex>
      </Stack>
    </SectionContainer>
  );
}
