import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaUserNinja, FaLock } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserNinja />} />
              <Input variant={"filled"} placeholder="Username" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaLock />} />
              <Input variant={"filled"} placeholder="Password" />
            </InputGroup>
          </VStack>
          <Button colorScheme={"red"} w="100%">
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} colorScheme={"red"}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
