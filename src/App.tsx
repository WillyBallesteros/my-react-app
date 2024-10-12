import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Navbar/NavBar";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/FormUserManagement/FormUM";
import FormUM from "./components/Main/FormUserManagement/FormUM";
import Sidebar from "./components/Aside/Aside";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"aside nav" "aside main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateRows="10% 1fr"
      templateColumns="5% 1fr"
      h="100vh" // Altura de toda la ventana
    >
      <GridItem area="nav" bg="white" w="100%" h="100%">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="#0056f0" w="100%" h="100%" display="flex" alignItems="center" justifyContent="center">
        <Sidebar />
      </GridItem>

      <GridItem
        area="main"
        bg="white"
        w="100%"
        h="100%"
        display="flex"
        padding={"2% 0 0 12%"}
      >
        <Box w="80vw" h="auto">
          <FormUM />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
