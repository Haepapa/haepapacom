import SectionContainer from "./SectionContainer";
import {
  SimpleGrid,
  Spacer,
  Text,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default function ContactSection() {
  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2} paddingBottom={4}>
        <Text fontSize="md" fontWeight="bold">
          We’d love to hear from you!
        </Text>
        <Spacer />
      </SimpleGrid>

      {/* Contact Form */}
      <Stack gap="8" maxW="sm" margin="auto" minWidth="190px" maxWidth="500px">
        <Field label="Name">
          <Input placeholder="John Doe" background={"white"} />
        </Field>
        <Field label="Email">
          <Input placeholder="me@example.com" background={"white"} />
        </Field>
        <Field label="Message">
          <Textarea placeholder="Your message." background={"white"} />
        </Field>
      </Stack>
    </SectionContainer>
  );
}
