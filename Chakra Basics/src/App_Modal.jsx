import {
  ChakraProvider,
  Button,
  useDisclosure,
  Flex,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center">
      <ChakraProvider>
        <Button onClick={onOpen}>Open</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>What's Up!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>두근두근 점심시간</ModalBody>
            <ModalFooter>
              <Button mr={4} onClick={onClose}>
                닫기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </Flex>
  );
}

export default App;
