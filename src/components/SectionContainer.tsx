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
    <Box
      paddingTop={8}
      paddingLeft={8}
      paddingRight={8}
      width="100%"
      {...boxProps}
    >
      <Box height="30px" />
      {children}
    </Box>
  );
};

export default SectionContainer;
