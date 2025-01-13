import { Center, Box } from "@chakra-ui/react";
import "./App.css";
import Index from "./pages/Index";

function App() {
  return (
    <Center
      minHeight="100vh"
      minWidth="100vw"
      background="background"
      margin="auto"
      alignItems="stretch"
    >
      <Box
        width="100%"
        maxWidth="900px"
        minWidth="390px"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        gap={5}
      >
        <Index />
      </Box>
    </Center>
  );
}

export default App;
