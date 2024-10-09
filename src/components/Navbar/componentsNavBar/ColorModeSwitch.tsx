import { IconButton, useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton aria-label='' icon={<MoonIcon />} onClick={toggleColorMode} variant="ghost"/>
  );
};

export default ColorModeSwitch;
