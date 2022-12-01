import {
  Box,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CellarModal from "./CellarModal";

export default function CellarThumb() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <HStack
      height={"120px"}
      position="relative"
      overflow={"hidden"}
      bg={"#ffffff"}
      rounded="md"
      onClick={onOpen}>
      <Image
        width={"100%"}
        src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
      />
      <CellarModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
