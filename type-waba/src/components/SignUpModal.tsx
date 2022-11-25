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
import { FaUserNinja, FaLock, FaEnvelope, FaUserSecret } from "react-icons/fa";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserSecret />} />
              <Input variant={"filled"} placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaEnvelope />} />
              <Input variant={"filled"} placeholder="Email" />
            </InputGroup>
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
