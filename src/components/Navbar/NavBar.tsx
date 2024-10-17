import { MoonIcon, QuestionOutlineIcon, SearchIcon  } from "@chakra-ui/icons";
import { FaRegBell } from "react-icons/fa6";
import userImg from "../../assets/d33f5bf6acf24a85bbae418113ff0276.webp";
import {
  Grid,
  GridItem,
  Heading,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

const NavBar = () => {
  const color = useColorModeValue("black", "white");
  const { toggleColorMode } = useColorMode();

  return (
    <Grid>
      <GridItem
        colSpan={1}
        h="9vh"
        display="grid"
        justifyContent="start"
        alignContent="center"
        pl={4}
      >
        <Heading
          justifyContent="flex-end"
          size="lg"
          fontSize="1.5rem"
          fontWeight="bold"
          fontFamily="sans-serif"
          color={color}
        >
          ABCall
        </Heading>
      </GridItem>
      <GridItem
        pr={3}
        colStart={2}
        colEnd={3}
        h="9vh"
        display="grid"
        justifyContent="end"
      >
        <Stack
          spacing={1}
          mx={"auto"}
          maxW={"xl"}
          flexDirection="row"
          alignItems="center"
        >
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            variant="ghost"
          />
          <IconButton
            aria-label="dark / light"
            icon={<MoonIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
          <IconButton
            aria-label=""
            icon={<QuestionOutlineIcon />}
            variant="ghost"
          />
          <IconButton
            aria-label="Bell Notification"
            icon={<FaRegBell />}
            variant="ghost"
          />
          <Box
            display="flex"
            border="1px"
            borderColor="#aaaaaa"
            as="button"
            borderRadius="lg"
            color={color}
            _hover={{
              backgroundColor: "#0056f0", // Cambia el fondo al hacer hover
              transform: "scale(1.02)", // Efecto de escalar ligeramente el Box
              color: "white",
            }}
          >
            <Stack flexDirection="row" gap={3}>
              <Text p="0.5rem">Jhon Doe</Text>
              <Image p="3px" boxSize="40px" borderRadius="full" src={userImg} />
            </Stack>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
