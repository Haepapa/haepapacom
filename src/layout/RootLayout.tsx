import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      bg="grey.500"
      minWidth="75vw"
      minHeight="100vh"
      background="danger"
    >
      <GridItem colSpan={6}>
        <Navbar />
      </GridItem>
    </Grid>
  );
}
