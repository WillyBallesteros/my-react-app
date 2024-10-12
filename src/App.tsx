import { Box, Grid, GridItem, useColorModeValue  } from "@chakra-ui/react";
import NavBar from "./components/Navbar/NavBar";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/FormUserManagement/FormUM";
import FormUM from "./components/Main/FormUserManagement/FormUM";
import Sidebar from "./components/Aside/Aside";

function App() {

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const sidebg = useColorModeValue("#0056f0", "gray.800");
  const mainbg = useColorModeValue("white", "gray.700");

  return (
    <Grid
      templateAreas={{
        base: `"aside nav" "aside main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateRows="9% 1fr"
      templateColumns="5% 1fr"
      h="100vh" // Altura de toda la ventana
    >
      <GridItem area="nav" bg={bg} color={color} w="100%" h="100%">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg={sidebg} w="100%" h="100%" display="flex" alignItems="center" justifyContent="center">
        <Sidebar />
      </GridItem>

      <GridItem
        area="main"
        bg={mainbg}
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
