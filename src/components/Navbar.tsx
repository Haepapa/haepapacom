import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useBreakpointValue,
  useDisclosure,
  VStack,
  Separator,
} from "@chakra-ui/react";

import { BsGithub } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import DakrModeToggle from "./DakrModeToggle";

export default function Navbar() {
  const {
    open, // boolean state
    onOpen, // function to set isOpen to true
    onClose, // function to set isOpen to false
    onToggle, // function to flip the boolean state
  } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false }) || false;
  const isTablet =
    useBreakpointValue({ base: false, md: true, lg: false }) || false;
  const isDesktop = useBreakpointValue({ base: false, lg: true }) || false;

  const NavItems = () => (
    <>
      <Box as="a">About</Box>
      <Box as="a">Projects</Box>
      <Box as="a">Contact</Box>
      <Box as="a">
        <BsGithub />
      </Box>
    </>
  );

  // mobile
  if (isMobile) {
    console.log("isMobile");
    return (
      <Flex
        as="nav"
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={3}
        paddingRight={3}
        mb="60px"
        alignItems="center"
        boxShadow="sm"
        pos="sticky"
        top={0}
        zIndex={10}
      >
        <VStack w="100%">
          <HStack w="100%">
            <Heading>Haepapa</Heading>
            <Spacer />
            <DakrModeToggle />

            {/* Open menu button */}
            <IconButton
              display={open ? "none" : "flex"}
              alignItems="center"
              justifyContent="center"
              size="xs"
              aria-label="Show Menu"
              variant="ghost"
              onClick={onOpen}
            >
              <GiHamburgerMenu />
            </IconButton>

            {/* close menu button */}
            <IconButton
              display={open ? "flex" : "none"}
              size="xs"
              aria-label="Show Menu"
              variant="ghost"
              onClick={onClose}
            >
              <RxCross2 />
            </IconButton>
          </HStack>

          {/* the menu */}
          <VStack
            as="span"
            display={open ? "flex" : "none"}
            w="100%"
            gap={4}
            p={1}
          >
            <Separator />
            <NavItems />
          </VStack>
        </VStack>
      </Flex>
    );
  }

  // tablet
  if (isTablet) {
    console.log("isTablet");
    return (
      <Flex
        as="nav"
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={3}
        paddingRight={3}
        mb="60px"
        alignItems="center"
        boxShadow="sm"
        pos="sticky"
        top={0}
        zIndex={10}
      >
        <VStack w="100%">
          <HStack w="100%">
            <Heading>Haepapa</Heading>
            <Spacer />
            <DakrModeToggle />

            {/* Open menu button */}
            <IconButton
              display={open ? "none" : "flex"}
              alignItems="center"
              justifyContent="center"
              size="xs"
              aria-label="Show Menu"
              variant="ghost"
              onClick={onOpen}
            >
              <GiHamburgerMenu />
            </IconButton>

            {/* close menu button */}
            <IconButton
              display={open ? "flex" : "none"}
              size="xs"
              aria-label="Show Menu"
              variant="ghost"
              onClick={onClose}
            >
              <RxCross2 />
            </IconButton>
          </HStack>

          {/* the menu */}
          <VStack as="span" display={open ? "flex" : "none"} w="100%">
            <Separator />
            <HStack gap={5} w="100%" justifyContent="center">
              <NavItems />
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    );
  }

  // desktop
  if (isDesktop) {
    console.log("isDesktop");
    return (
      <Flex
        as="nav"
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={3}
        paddingRight={3}
        mb="60px"
        alignItems="center"
        boxShadow="sm"
        pos="sticky"
        top={0}
        zIndex={10}
      >
        <Heading>Haepapa</Heading>
        <Spacer />
        <HStack gap={5}>
          <NavItems />
          <DakrModeToggle />
        </HStack>
      </Flex>
    );
  }
  return null;
}
