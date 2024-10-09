import { Box, Text, HStack } from "@chakra-ui/react";
import UserImage from "./UserImage";

const UserContiner = () => {
  return (
    <Box
      border="1px"
      borderColor="#aaaaaa"
      as="button"
      borderRadius="md"
      color="black"
    >
      <HStack>
        <Text p="10px">Jhon Doe</Text>
        <UserImage />
      </HStack>
    </Box>
  );
};

export default UserContiner;
