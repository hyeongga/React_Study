import {
  Box,
  ChakraProvider,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
} from "@chakra-ui/react";
import { PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ChakraProvider>
      <Box color>Hello, Chakra UI</Box>
      <Button
        isLoading={isLoading}
        colorScheme="green"
        leftIcon={<PhoneIcon />}
        variant={"solid"}
      >
        Call
      </Button>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          dinner
        </MenuButton>
        <MenuList>
          <MenuGroup title="Pasta">
            <MenuItem>cream</MenuItem>
            <MenuItem>rose</MenuItem>
            <MenuItem>chicken</MenuItem>
          </MenuGroup>

          <MenuGroup title="chicken">
            <MenuItem>pasta</MenuItem>
            <MenuItem>pizza</MenuItem>
            <MenuItem>chicken</MenuItem>
          </MenuGroup>

          <MenuGroup title="chicken">
            <MenuItem>pasta</MenuItem>
            <MenuItem>pizza</MenuItem>
            <MenuItem>chicken</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
}

export default App;
