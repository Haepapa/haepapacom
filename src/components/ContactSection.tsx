import SectionContainer from "./SectionContainer";
import React, { useState } from "react";
import {
  SimpleGrid,
  Spacer,
  Text,
  Input,
  Textarea,
  Fieldset,
  Link,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import CustomButton from "./CustomButton";
import { validateFormData } from "@/actions/validateFormData";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import sendMessage from "@/actions/sendMessage";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputErrors, setInputErrors] = useState<{ [key: string]: string }>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tsncsAgree, setTsncsAgree] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setInputErrors(validationErrors);
      return;
    } else {
      const sent = sendMessage(formData);
      sent.then((result) => {
        if (result) {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setInputErrors({});
          setIsDialogOpen(true);
        }
      });
    }
  };

  const MessageSent = () => {
    return (
      <DialogRoot
        open={isDialogOpen}
        onInteractOutside={() => setIsDialogOpen(false)}
      >
        <DialogContent background={"white"}>
          <DialogHeader>
            <DialogTitle>Message Sent</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>
              Thank you for your message! Your message has been sent
              successfully and we will get back to you soon.
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <CustomButton
                label="Close"
                onClick={() => setIsDialogOpen(false)}
              />
            </DialogActionTrigger>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    );
  };

  return (
    <SectionContainer>
      <SimpleGrid minChildWidth="190px" gap={2} paddingBottom={4}>
        <Text fontSize="md" fontWeight="bold">
          We’d love to hear from you!
        </Text>
        <Spacer />
      </SimpleGrid>

      {/* Contact Form */}
      <Fieldset.Root
        size="lg"
        maxW="md"
        margin="auto"
        minWidth="190px"
        maxWidth="500px"
        paddingTop={4}
        paddingBottom={4}
      >
        <Fieldset.Content>
          <Field
            label="Name"
            unstyled={true}
            textStyle="sm"
            lineHeight={2}
            required={true}
            invalid={!!inputErrors.name}
            errorText={inputErrors.name}
            color={inputErrors.name ? "red" : undefined}
          >
            <Input
              name="name"
              background="white"
              value={formData.name}
              onChange={handleChange}
              color={"black"}
            />
          </Field>

          <Field
            label="Email address"
            unstyled={true}
            textStyle="sm"
            lineHeight={2}
            required={true}
            invalid={!!inputErrors.email}
            errorText={inputErrors.email}
            color={inputErrors.email ? "red" : undefined}
          >
            <Input
              name="email"
              type="email"
              background="white"
              value={formData.email}
              onChange={handleChange}
              color={"black"}
            />
          </Field>

          <Field
            label="Message"
            unstyled={true}
            textStyle="sm"
            lineHeight={2}
            required={true}
            invalid={!!inputErrors.message}
            errorText={inputErrors.message}
            color={inputErrors.message ? "red" : undefined}
            helperText="Max 1000 characters."
          >
            <Textarea
              name="message"
              background="white"
              value={formData.message}
              onChange={handleChange}
              color={"black"}
              resize="vertical"
            />
          </Field>
          <Checkbox
            colorPalette="main"
            variant={"outline"}
            color={"black"}
            onCheckedChange={(checked) =>
              setTsncsAgree(checked.checked === true)
            }
          >
            I agree to the{" "}
            <Link color={"black"} href="">
              Privacy Policy
            </Link>
            .
          </Checkbox>
        </Fieldset.Content>
        <CustomButton
          label="Send"
          onClick={handleSubmit}
          disabled={!tsncsAgree}
        />
      </Fieldset.Root>
      {isDialogOpen && <MessageSent />}
    </SectionContainer>
  );
}
