import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export default function DakrModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <IoMoon /> : <IoSunny />;
  return (
    <IconButton onClick={toggleColorMode} variant="ghost">
      {icon}
    </IconButton>
  );
}
