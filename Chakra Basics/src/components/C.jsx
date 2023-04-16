import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../App";

function C() {
  const { count, setCount } = useContext(AppContext);
  return (
    <Box w={100} h={100} bgColor="yellow.500">
      {count}
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </Box>
  );
}

export default C;
