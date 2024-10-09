import { IconButton } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const ShowPassword = ({ showPassword, setShowPassword }) => {
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <IconButton
      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
      icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
      onClick={handleTogglePassword}
      variant="link"
      position="absolute"
      right="1rem" 
      top="50%" 
      transform="translateY(-50%)" 
      zIndex="1"
    />
  );
};

export default ShowPassword;
