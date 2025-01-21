import React from "react";
import SectionContainer from "@/components/SectionContainer";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Box, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Heading as="h1" size="xl" mb={4}>
          Privacy Policy
        </Heading>
        <Text mb={4}>Last updated: [Date]</Text>
        <Text mb={4}>
          This Privacy Policy explains how [Your Company Name] ("we", "us", or
          "our") collects, uses, discloses, and protects your information when
          you visit our website [your-website-url] (the "Site").
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Information We Collect
        </Heading>
        <Text mb={4}>
          We may collect personal information that you provide to us directly,
          such as your name, email address, and any other information you choose
          to provide. We may also collect information automatically when you
          visit our Site, such as your IP address, browser type, and browsing
          behavior.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          How We Use Your Information
        </Heading>
        <Text mb={4}>We use the information we collect to:</Text>
        <Box as="ul" pl={4} mb={4}>
          <Box as="li" mb={2}>
            Provide, operate, and maintain our Site
          </Box>
          <Box as="li" mb={2}>
            Improve, personalize, and expand our Site
          </Box>
          <Box as="li" mb={2}>
            Understand and analyze how you use our Site
          </Box>
          <Box as="li" mb={2}>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the Site, and for
            marketing and promotional purposes
          </Box>
          <Box as="li" mb={2}>
            Process your transactions and manage your orders
          </Box>
          <Box as="li" mb={2}>
            Send you emails
          </Box>
          <Box as="li" mb={2}>
            Find and prevent fraud
          </Box>
        </Box>
        <Heading as="h2" size="lg" mb={4}>
          How We Share Your Information
        </Heading>
        <Text mb={4}>
          We may share your information with third parties for the following
          purposes:
        </Text>
        <Box as="ul" pl={4} mb={4}>
          <Box as="li" mb={2}>
            With service providers who help us operate our Site, such as hosting
            providers and email service providers
          </Box>
          <Box as="li" mb={2}>
            With our business partners, for example, to offer you certain
            products, services, or promotions
          </Box>
          <Box as="li" mb={2}>
            To comply with legal obligations, such as responding to a subpoena
            or court order
          </Box>
          <Box as="li" mb={2}>
            To protect and defend our rights and property
          </Box>
          <Box as="li" mb={2}>
            With your consent or at your direction
          </Box>
        </Box>
        <Heading as="h2" size="lg" mb={4}>
          Your Choices
        </Heading>
        <Text mb={4}>
          You have the following choices regarding your information:
        </Text>
        <Box as="ul" pl={4} mb={4}>
          <Box as="li" mb={2}>
            You can opt out of receiving marketing emails from us by following
            the unsubscribe link in those emails.
          </Box>
          <Box as="li" mb={2}>
            You can update or delete your personal information by contacting us
            at [Your Contact Information].
          </Box>
          <Box as="li" mb={2}>
            You can set your browser to refuse all or some browser cookies, or
            to alert you when cookies are being sent.
          </Box>
        </Box>
        <Heading as="h2" size="lg" mb={4}>
          Security
        </Heading>
        <Text mb={4}>
          We take reasonable measures to help protect your personal information
          from loss, theft, misuse, and unauthorized access, disclosure,
          alteration, and destruction.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Changes to This Privacy Policy
        </Heading>
        <Text mb={4}>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Contact Us
        </Heading>
        <Text mb={4}>
          If you have any questions about this Privacy Policy, please contact us
          at [Your Contact Information].
        </Text>
      </SectionContainer>
      <FooterSection />
    </>
  );
};

export default PrivacyPolicy;
