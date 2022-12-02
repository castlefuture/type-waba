import { HStack, Image, useDisclosure } from "@chakra-ui/react";
import { ICellarList } from "../types";
import CellarModal from "./CellarModal";

export default function CellarThumb({ wine_id, wine_picture }: ICellarList) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <HStack
      height={"120px"}
      position="relative"
      overflow={"hidden"}
      bg={"#ffffff"}
      rounded="md"
      onClick={onOpen}>
      <Image width={"100%"} src={wine_picture} />
      <CellarModal isOpen={isOpen} onClose={onClose} wine_id={wine_id} />
    </HStack>
  );
}
