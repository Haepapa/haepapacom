import { Grid, GridItem, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Projects from "../pages/Projects";

export default function RootLayout() {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      bg="grey.500"
      width="75vw"
      minWidth="400px"
      maxWidth="900px"
      minHeight="100vh"
      margin="auto"
    >
      <GridItem colSpan={6}>
        <Navbar />
        <Box padding={[3, 5, 10]}>
          <About />
          <Projects />
        </Box>
      </GridItem>
    </Grid>
  );
}
