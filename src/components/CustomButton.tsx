import { Button, ButtonProps } from "@chakra-ui/react";

type CustomButtonProps = ButtonProps & {
  label: string;
  // onClick?: (e: React.FormEvent) => Promise<void> | void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button
      variant="surface"
      textStyle="xs"
      background="main"
      _hover={{ shadow: "button" }}
      width="fit-content"
      height="fit-content"
      paddingTop={1.5}
      paddingBottom={1.5}
      paddingLeft={3}
      paddingRight={3}
      color="buttonText"
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
