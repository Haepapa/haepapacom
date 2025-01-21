import React from "react";
import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import FooterSection from "@/components/FooterSection";
import { Box, Heading, Text } from "@chakra-ui/react";

const Cookies: React.FC = () => {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Heading as="h1" size="xl" mb={4}>
          Cookies Policy
        </Heading>
        <Text mb={4}>Last updated: [Date]</Text>
        <Text mb={4}>
          This Cookies Policy explains what cookies are, how we use them, and
          your choices regarding cookies.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          What are cookies?
        </Heading>
        <Text mb={4}>
          Cookies are small text files that are stored on your device (computer,
          mobile device, etc.) when you visit a website. They help the website
          remember your preferences and improve your user experience.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          How we use cookies
        </Heading>
        <Text mb={4}>We use cookies for various purposes, including:</Text>
        <Box as="ul" pl={4} mb={4}>
          <Box as="li" mb={2}>
            <strong>Essential Cookies:</strong> These cookies are necessary for
            the website to function properly. They enable basic features such as
            page navigation and access to secure areas of the website.
          </Box>
          <Box as="li" mb={2}>
            <strong>Performance Cookies:</strong> These cookies help us
            understand how visitors interact with our website by collecting and
            reporting information anonymously.
          </Box>
          <Box as="li" mb={2}>
            <strong>Functionality Cookies:</strong> These cookies allow the
            website to remember choices you make (such as your username,
            language, or region) and provide enhanced, more personalized
            features.
          </Box>
          <Box as="li" mb={2}>
            <strong>Advertising Cookies:</strong> These cookies are used to
            deliver advertisements that are relevant to you and your interests.
            They also help us measure the effectiveness of our advertising
            campaigns.
          </Box>
        </Box>
        <Heading as="h2" size="lg" mb={4}>
          Your choices regarding cookies
        </Heading>
        <Text mb={4}>
          You can manage your cookie preferences through your browser settings.
          Most browsers allow you to refuse cookies or delete them. However,
          please note that if you disable cookies, some features of our website
          may not function properly.
        </Text>
        <Text mb={4}>
          For more information about cookies and how to manage them, you can
          visit{" "}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.allaboutcookies.org
          </a>
          .
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Contact us
        </Heading>
        <Text mb={4}>
          If you have any questions about our Cookies Policy, please contact us
          at [Your Contact Information].
        </Text>
      </SectionContainer>
      <FooterSection />
    </>
  );
};

export default Cookies;
