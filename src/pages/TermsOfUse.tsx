import React from "react";
import SectionContainer from "@/components/SectionContainer";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Heading, List, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CookieAccept from "@/components/CookieAccept";

const TermsOfUse: React.FC = () => {
  const companyName = "Haepapa";
  const companyURL = "haepapa.com";
  useEffect(() => {
    if (location.pathname === "/terms-of-use") {
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
          Terms of Use
        </Heading>
        <Text mb={4} textStyle="sm">
          Last updated: January 24, 2025
        </Text>
        <Text mb={4} textStyle="sm">
          Welcome to {companyName}! These terms and conditions outline the rules
          and regulations for the use of {companyName}'s Website, located at{" "}
          {companyURL}.
        </Text>
        <Text mb={4} textStyle="sm">
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use {companyName} if you do not agree
          to take all of the terms and conditions stated on this page.
        </Text>
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          Cookies
        </Heading>
        <Text mb={4} textStyle="sm">
          We employ the use of cookies. By accessing {companyName}, you agreed
          to use cookies in agreement with the {companyName}'s{" "}
          <Link
            color={"black"}
            to="/privacy-policy"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            Privacy Policy
          </Link>
          .
        </Text>
        <Text mb={4} textStyle="sm">
          Most interactive websites use cookies to let us retrieve the user’s
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </Text>
        <Text mb={4} textStyle="sm">
          Please read our{" "}
          <Link
            color={"black"}
            to="/cookies"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            Cookie Policy
          </Link>
          .
        </Text>
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          License
        </Heading>
        <Text mb={4} textStyle="sm">
          Unless otherwise stated, {companyName} and/or its licensors own the
          intellectual property rights for all material on {companyName}. All
          intellectual property rights are reserved. You may access this from{" "}
          {companyName} for your own personal use subjected to restrictions set
          in these terms and conditions.
        </Text>
        <Text mb={4}>You must not:</Text>
        <List.Root textStyle="sm" mb={4}>
          <List.Item>Republish material from {companyName}</List.Item>
          <List.Item>
            Sell, rent or sub-license material from {companyName}
          </List.Item>
          <List.Item>
            Reproduce, duplicate or copy material from {companyName}
          </List.Item>
          <List.Item>Redistribute content from {companyName}</List.Item>
        </List.Root>

        {/* Hyperlinking to our Content */}
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          Hyperlinking to our Content
        </Heading>
        <Text mb={4} textStyle="sm">
          The following organisations may link to our Website without prior
          written approval:
        </Text>
        <List.Root textStyle="sm" mb={4}>
          <List.Item>Republish material from {companyName}</List.Item>
          <List.Item>Government agencies</List.Item>
          <List.Item>Search engines</List.Item>
          <List.Item>News organisations</List.Item>
          <List.Item>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses
          </List.Item>
          <List.Item>
            System wide Accredited Businesses except soliciting non-profit
            organisations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site
          </List.Item>
        </List.Root>

        {/* iFrames */}
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          iFrames
        </Heading>
        <Text mb={4} textStyle="sm">
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </Text>

        {/* Content Liability */}
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          Content Liability
        </Heading>
        <Text mb={4} textStyle="sm">
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </Text>
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          Your Privacy
        </Heading>
        <Text mb={4} textStyle="sm">
          Please read our{" "}
          <Link
            color={"black"}
            to="/privacy-policy"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            Privacy Policy
          </Link>
          .
        </Text>
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          Reservation of Rights
        </Heading>
        <Text mb={4} textStyle="sm">
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </Text>
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          Removal of links from our website
        </Heading>
        <Text mb={4} textStyle="sm">
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </Text>
        <Text mb={4} textStyle="sm">
          We do not ensure that the information on this website is correct, we
          do not warrant its completeness or accuracy; nor do we promise to
          ensure that the website remains available or that the material on the
          website is kept up to date.
        </Text>
        <Heading as="h2" fontSize="md" fontWeight="bold" mb={4}>
          Disclaimer
        </Heading>
        <Text mb={4} textStyle="sm">
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </Text>
        <List.Root textStyle="sm" mb={4}>
          <List.Item>
            limit or exclude our or your liability for death or personal injury
          </List.Item>
          <List.Item>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation
          </List.Item>
          <List.Item>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law
          </List.Item>
          <List.Item>
            exclude any of our or your liabilities that may not be excluded
            under applicable law
          </List.Item>
        </List.Root>
        <Text mb={4} textStyle="sm">
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </Text>
        <Text mb={4} textStyle="sm">
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </Text>
      </SectionContainer>
      <FooterSection />
      <CookieAccept />
    </>
  );
};

export default TermsOfUse;
