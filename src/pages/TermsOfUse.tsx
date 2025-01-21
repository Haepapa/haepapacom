import React from "react";
import SectionContainer from "@/components/SectionContainer";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Box, Heading, Text } from "@chakra-ui/react";

const TermsOfUse: React.FC = () => {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Heading as="h1" size="xl" mb={4}>
          Terms of Use
        </Heading>
        <Text mb={4}>Last updated: [Date]</Text>
        <Text mb={4}>
          Welcome to [Your Company Name]! These terms and conditions outline the
          rules and regulations for the use of [Your Company Name]'s Website,
          located at [your-website-url].
        </Text>
        <Text mb={4}>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use [Your Company Name] if you do not
          agree to take all of the terms and conditions stated on this page.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Cookies
        </Heading>
        <Text mb={4}>
          We employ the use of cookies. By accessing [Your Company Name], you
          agreed to use cookies in agreement with the [Your Company Name]'s
          Privacy Policy.
        </Text>
        <Text mb={4}>
          Most interactive websites use cookies to let us retrieve the user’s
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          License
        </Heading>
        <Text mb={4}>
          Unless otherwise stated, [Your Company Name] and/or its licensors own
          the intellectual property rights for all material on [Your Company
          Name]. All intellectual property rights are reserved. You may access
          this from [Your Company Name] for your own personal use subjected to
          restrictions set in these terms and conditions.
        </Text>
        <Text mb={4}>You must not:</Text>
        <Box as="ul" pl={4} mb={4}>
          <Box as="li" mb={2}>
            Republish material from [Your Company Name]
          </Box>
          <Box as="li" mb={2}>
            Sell, rent or sub-license material from [Your Company Name]
          </Box>
          <Box as="li" mb={2}>
            Reproduce, duplicate or copy material from [Your Company Name]
          </Box>
          <Box as="li" mb={2}>
            Redistribute content from [Your Company Name]
          </Box>
        </Box>
        <Heading as="h2" size="lg" mb={4}>
          Hyperlinking to our Content
        </Heading>
        <Text mb={4}>
          The following organizations may link to our Website without prior
          written approval:
        </Text>
        <Box as="ul" pl={4} mb={4}>
          <Box as="li" mb={2}>
            Government agencies
          </Box>
          <Box as="li" mb={2}>
            Search engines
          </Box>
          <Box as="li" mb={2}>
            News organizations
          </Box>
          <Box as="li" mb={2}>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses
          </Box>
          <Box as="li" mb={2}>
            System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site
          </Box>
        </Box>
        <Heading as="h2" size="lg" mb={4}>
          iFrames
        </Heading>
        <Text mb={4}>
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Content Liability
        </Heading>
        <Text mb={4}>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Your Privacy
        </Heading>
        <Text mb={4}>Please read Privacy Policy</Text>
        <Heading as="h2" size="lg" mb={4}>
          Reservation of Rights
        </Heading>
        <Text mb={4}>
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Removal of links from our website
        </Heading>
        <Text mb={4}>
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </Text>
        <Text mb={4}>
          We do not ensure that the information on this website is correct, we
          do not warrant its completeness or accuracy; nor do we promise to
          ensure that the website remains available or that the material on the
          website is kept up to date.
        </Text>
        <Heading as="h2" size="lg" mb={4}>
          Disclaimer
        </Heading>
        <Text mb={4}>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </Text>
        <Box as="ul" pl={4} mb={4}>
          <Box as="li" mb={2}>
            limit or exclude our or your liability for death or personal injury
          </Box>
          <Box as="li" mb={2}>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation
          </Box>
          <Box as="li" mb={2}>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law
          </Box>
          <Box as="li" mb={2}>
            exclude any of our or your liabilities that may not be excluded
            under applicable law
          </Box>
        </Box>
        <Text mb={4}>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </Text>
        <Text mb={4}>
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </Text>
      </SectionContainer>
      <FooterSection />
    </>
  );
};

export default TermsOfUse;
