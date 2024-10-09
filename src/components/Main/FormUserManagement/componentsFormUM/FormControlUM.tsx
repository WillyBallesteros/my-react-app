import {
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import ShowPassword from "./ShowPassword";
import { useState } from "react";

const FormControlUM = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <><FormControl isRequired>
      <FormLabel>Nombre</FormLabel>
      <Input placeholder="Name" />
      <FormLabel>Correo electrónico</FormLabel>
      <Input placeholder="Correo electrónico" />
      <FormLabel>Contraseña</FormLabel>
      <InputGroup>
        <Input
          placeholder="******"
          type={showPassword ? "text" : "password"}
          pr="4.5rem"
          sx={{
            "&::-ms-reveal, &::-ms-clear": {
              display: "none",
            }, // Para eliminar el ícono en Internet Explorer y Edge
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              display: "none", // Para Safari y Chrome
            },
          }} />
        <ShowPassword
          showPassword={showPassword}
          setShowPassword={setShowPassword} />
      </InputGroup>
      <FormLabel>Confirmación de contraseña</FormLabel>
      <InputGroup>
        <Input
          placeholder="******"
          type={showPassword ? "text" : "password"}
          pr="4.5rem"
          sx={{
            "&::-ms-reveal, &::-ms-clear": {
              display: "none",
            }, // Para eliminar el ícono en Internet Explorer y Edge
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              display: "none", // Para Safari y Chrome
            },
          }} />
        <ShowPassword
          showPassword={showPassword}
          setShowPassword={setShowPassword} />
      </InputGroup>
      <FormLabel>Rol</FormLabel>
      <Select placeholder="Select option">
        <option>X</option>
        <option>Y</option>
      </Select>
    </FormControl>
    <Divider borderColor="gray.200" borderWidth="1px" w="100%"/></>
  );
};

export default FormControlUM;
