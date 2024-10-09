import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Navbar/NavBar";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/FormUserManagement/FormUM";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"aside nav" "aside main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateRows="8% 1fr"
      templateColumns="6% 1fr"
      h="100vh" // Altura de toda la ventana
    >
      <GridItem area="nav" bg="white" w="100%" h="100%">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="dodgerblue" w="100%" h="100%">
        <Aside />
      </GridItem>

      <GridItem area="main" bg="white" w="100%" h="100%">
        <Main/>
      </GridItem>
    </Grid>
  );
}

export default App;
