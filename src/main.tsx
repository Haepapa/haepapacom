import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import { system } from "./themes/system.tsx";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={system}>
    <ColorModeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ColorModeProvider>
  </ChakraProvider>
);
