import { Box, ChakraProvider } from "@chakra-ui/react";
import A from "./components/A";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider>
      <ChakraProvider>
        <Box>Hello, React</Box>
        <A />
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;

//첫 실습 오류남
