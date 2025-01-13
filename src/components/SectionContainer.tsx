import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type ContainerProps = BoxProps & {
  children: React.ReactNode;
};

const SectionContainer: React.FC<ContainerProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <Box padding={8} width="100%" {...boxProps}>
      {children}
    </Box>
  );
};

export default SectionContainer;
