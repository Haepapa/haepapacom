import { Center, Box } from "@chakra-ui/react";
import "./App.css";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cookies from "./pages/Cookies";
import TermsOfUse from "./pages/TermsOfUse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </Router>
      </Box>
    </Center>
  );
}

export default App;
