import React from "react";
import SectionContainer from "@/components/SectionContainer";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Heading, Text, List } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    if (location.pathname === "/privacy-policy") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Heading as="h1" fontWeight="bold" textStyle="lg" mb={4}>
          Privacy Policy
        </Heading>
        <Text mb={4} textStyle="sm">
          Last updated: [Date]
        </Text>
        <Text mb={4} textStyle="sm">
          This Privacy Policy explains how [Your Company Name] ("we", "us", or
          "our") collects, uses, discloses, and protects your information when
          you visit our website [your-website-url] (the "Site").
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Information We Collect
        </Heading>
        <Text mb={4} textStyle="sm">
          We may collect personal information that you provide to us directly,
          such as your name, email address, and any other information you choose
          to provide. We may also collect information automatically when you
          visit our Site, such as your IP address, browser type, and browsing
          behavior.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          How We Use Your Information
        </Heading>
        <Text mb={4} textStyle="sm">
          We use the information we collect to:
        </Text>
        <List.Root textStyle="sm" mb={4}>
          <List.Item>Provide, operate, and maintain our Site</List.Item>

          <List.Item>Improve, personalize, and expand our Site</List.Item>

          <List.Item>Understand and analyze how you use our Site</List.Item>

          <List.Item>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the Site, and for
            marketing and promotional purposes
          </List.Item>

          <List.Item>
            Process your transactions and manage your orders
          </List.Item>

          <List.Item>Send you emails</List.Item>
          <List.Item>Find and prevent fraud</List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={4}>
          How We Share Your Information
        </Heading>
        <Text mb={4} textStyle="sm">
          We may share your information with third parties for the following
          purposes:
        </Text>
        <List.Root textStyle="sm" mb={4}>
          <List.Item>
            With service providers who help us operate our Site, such as hosting
            providers and email service providers
          </List.Item>
          <List.Item>
            With our business partners, for example, to offer you certain
            products, services, or promotions
          </List.Item>
          <List.Item>
            To comply with legal obligations, such as responding to a subpoena
            or court order
          </List.Item>
          <List.Item>To protect and defend our rights and property</List.Item>
          <List.Item>With your consent or at your direction</List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={4}>
          Your Choices
        </Heading>
        <Text mb={4} textStyle="sm">
          You have the following choices regarding your information:
        </Text>
        <List.Root textStyle="sm" mb={4}>
          <List.Item>
            You can opt out of receiving marketing emails from us by following
            the unsubscribe link in those emails.
          </List.Item>
          <List.Item>
            You can update or delete your personal information by contacting us,
            just send us a{" "}
            <Link
              color={"black"}
              to="/#contact"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              message
            </Link>
            .
          </List.Item>
          <List.Item>
            You can set your browser to refuse all or some browser cookies, or
            to alert you when cookies are being sent.
          </List.Item>
        </List.Root>

        <Heading as="h2" size="lg" mb={4}>
          Security
        </Heading>
        <Text mb={4} textStyle="sm">
          We take reasonable measures to help protect your personal information
          from loss, theft, misuse, and unauthorized access, disclosure,
          alteration, and destruction.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Changes to This Privacy Policy
        </Heading>
        <Text mb={4} textStyle="sm">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Contact Us
        </Heading>
        <Text mb={4} textStyle="sm">
          If you have any questions about this Privacy Policy, please contact us
          by sending a{" "}
          <Link
            color={"black"}
            to="/#contact"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            message
          </Link>
          .
        </Text>
      </SectionContainer>
      <FooterSection />
    </>
  );
};

export default PrivacyPolicy;
