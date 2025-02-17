import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import FooterSection from "@/components/FooterSection";
import { List, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/CustomButton";
import CookieAccept from "@/components/CookieAccept";

const Cookies: React.FC = () => {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setCookieConsent(consent);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setCookieConsent("accepted");
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setCookieConsent("rejected");
    window.location.href = "https://www.google.com";
  };

  useEffect(() => {
    if (location.pathname === "/cookies") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Heading as="h1" fontWeight="bold" textStyle="xl" mb={4}>
          Cookies Policy
        </Heading>
        <Text mb={4} textStyle="md">
          Last updated: January 24, 2025
        </Text>
        <Text mb={4} textStyle="md">
          This Cookies Policy explains what cookies are, how we use them, and
          your choices regarding cookies.
        </Text>

        <Heading as="h2" textStyle="lg" fontWeight="bold" mb={4}>
          What are cookies?
        </Heading>
        <Text mb={4} textStyle="md">
          Cookies are small text files that are stored on your device (computer,
          mobile device, etc.) when you visit a website. They help the website
          remember your preferences and improve your user experience.
        </Text>

        <Heading as="h2" textStyle="lg" fontWeight="bold" mb={4}>
          How we use cookies
        </Heading>
        <Text mb={4} textStyle="md">
          We use cookies for various purposes, including:
        </Text>
        <List.Root textStyle="md" mb={4}>
          <List.Item>
            Essential Cookies: These cookies are necessary for the website to
            function properly. They enable basic features such as page
            navigation and access to secure areas of the website.
          </List.Item>
          <List.Item>
            Performance Cookies: These cookies help us understand how visitors
            interact with our website by collecting and reporting information
            anonymously.
          </List.Item>
          <List.Item>
            Functionality Cookies: These cookies allow the website to remember
            choices you make (such as your username, language, or region) and
            provide enhanced, more personalized features.
          </List.Item>
          <List.Item>
            Advertising Cookies: These cookies are used to deliver
            advertisements that are relevant to you and your interests. They
            also help us measure the effectiveness of our advertising campaigns.
          </List.Item>
        </List.Root>

        <Heading as="h2" textStyle="lg" fontWeight="bold" mb={4}>
          Your choices regarding cookies
        </Heading>
        <Text mb={4} textStyle="md">
          You can manage your cookie preferences through your browser settings.
          Most browsers allow you to refuse cookies or delete them. However,
          please note that if you disable cookies, some features of our website
          may not function properly.
        </Text>
        <Text mb={4} textStyle="md">
          For more information about cookies and how to manage them, you can
          visit{" "}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            www.allaboutcookies.org
          </a>
          .
        </Text>

        <Heading as="h2" textStyle="lg" fontWeight="bold" mb={4}>
          Contact us
        </Heading>
        <Text mb={4} textStyle="md">
          If you have any questions about our Cookies Policy, please send us a{" "}
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

        <Heading as="h2" textStyle="lg" fontWeight="bold" mb={4}>
          Your Choices
        </Heading>
        <Text mb={4} textStyle="md">
          You have currently{" "}
          <strong>
            {cookieConsent === "accepted" ? "accepted" : "rejected"}{" "}
          </strong>
          cookies.
        </Text>
        <CustomButton onClick={handleAccept} mr={4} label="Accept Cookies" />
        <CustomButton onClick={handleReject} mr={4} label="Reject Cookies" />
      </SectionContainer>
      <FooterSection />
      <CookieAccept />
    </>
  );
};

export default Cookies;
