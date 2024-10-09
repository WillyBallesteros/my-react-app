import { VStack } from "@chakra-ui/react";
import HeadingFormUM from "./componentsFormUM/HeadingFormUM";
import TextUM1 from "./componentsFormUM/TextUM1";
import FormControlUM from "./componentsFormUM/FormControlUM";

const FormUM = () => {
  return (
    <VStack justify="center">
      <VStack alignContent="flex-start">
        <HeadingFormUM />
        <TextUM1 />
        <FormControlUM />
      </VStack>
    </VStack>
  );
};

export default FormUM;
