import SectionContainer from "./SectionContainer";
import { Flex, Separator, Stack, Text, Link, Spacer } from "@chakra-ui/react";

export default function FooterSection() {
  return (
    <SectionContainer>
      <Stack>
        <Separator size={"sm"} variant="solid" borderColor={"black"} />
        <Flex gap={4} justify="center" align="center" textStyle={"sm"}>
          <Link color={"black"} href="">
            Terms of Use
          </Link>
          <Link color={"black"} href="">
            Privacy Policy
          </Link>
          <Link color={"black"} href="">
            Cookies
          </Link>
          <Spacer />
          <Text>Copyright 2025 Haepapa. All rights reserved.</Text>
        </Flex>
      </Stack>
    </SectionContainer>
  );
}
