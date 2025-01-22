import { Box, Spacer, Text, useToken, Link, Icon } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import HaepapaLogo from "@/assets/HaepapaLogo";
import { IoLogoGithub } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type NavBarProps = {
  scrollToContactUs?: () => void;
  scrollToProjects?: () => void;
  scrollToHero?: () => void;
};

export default function Navbar({
  scrollToProjects,
  scrollToContactUs,
  scrollToHero,
}: NavBarProps) {
  const [fillColor, strokeColor] = useToken("colors", ["main", "outline"]);
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (scrollToContactUs) {
      scrollToContactUs();
    } else {
      navigate("/#contact");
    }
  };

  const handleProjectsClick = () => {
    if (scrollToProjects) {
      scrollToProjects();
    } else {
      navigate("/#projects");
    }
  };

  const handleHeroClick = () => {
    if (scrollToHero) {
      scrollToHero();
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Box
        background="white"
        shadow="sm"
        display="flex"
        gap={4}
        padding={1}
        zIndex={1000}
        position="fixed"
        top={0}
        width={"100%"}
        maxWidth={"900px"}
        minWidth={"390px"}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={2}
          cursor={"button"}
          onClick={handleHeroClick}
        >
          <HaepapaLogo fillColor={fillColor} strokeColor={strokeColor} />

          <Text
            fontWeight="bold"
            textStyle="lg"
            alignContent="center"
            onClick={handleHeroClick}
          >
            Haepapa
          </Text>
        </Box>
        <Spacer />

        <Link
          textStyle="sm"
          alignContent="center"
          onClick={handleProjectsClick}
        >
          Projects
        </Link>
        <Link textStyle="sm" alignContent="center" onClick={handleContactClick}>
          Contact
        </Link>
        <Link href="https://github.com/Haepapa" height="25px" width="25px">
          <Icon height="23px" width="23px">
            <IoLogoGithub />
          </Icon>
        </Link>
        <ColorModeButton height="25px" width="25px" _hover={{ bg: "white" }} />
      </Box>
    </>
  );
}
