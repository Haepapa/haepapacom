import { Box } from "@chakra-ui/react";
import "./App.css";
import Index from "./pages/Index";

function App() {
  return (
    <Box
      minWidth="390px"
      maxWidth="900px"
      minHeight="100vh"
      background="red"
      margin="auto"
    >
      <Index />
    </Box>
  );
}

export default App;
