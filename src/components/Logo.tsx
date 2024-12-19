import { Box, Text } from "@chakra-ui/react";

interface LogoProps {
  w?: string;
  color?: string[];
}

export default function Logo(props: LogoProps) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
}
