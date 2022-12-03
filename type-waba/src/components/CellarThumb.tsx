import { HStack, Image, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ICellarList } from "../types";
import CellarModal from "./CellarModal";

export default function CellarThumb({ wine_id, wine_picture }: ICellarList) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Link to={`/reviews/${wine_id}`}>
      <HStack
        height={"120px"}
        position="relative"
        overflow={"hidden"}
        bg={"#ffffff"}
        rounded="md"
        onClick={onOpen}>
        <Image width={"100%"} src={wine_picture} />
      </HStack>
    </Link>
  );
}
