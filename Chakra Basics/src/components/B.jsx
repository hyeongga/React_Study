import { Box } from "@chakra-ui/react";
import C from "./C";

function B() {
  return (
    <>
      <Box w={100} h={100} bgColor="orange.500">
        B
        <C />
      </Box>
    </>
  );
}

export default B;
