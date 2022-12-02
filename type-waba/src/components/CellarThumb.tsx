import { HStack, Image, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ICellarList } from "../types";
import CellarModal from "./CellarModal";

export default function CellarThumb({
  pk,
  wine_id,
  wine_picture,
}: ICellarList) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Link to={`/reviews/${pk}`}>
      <HStack
        height={"120px"}
        position="relative"
        overflow={"hidden"}
        bg={"#ffffff"}
        rounded="md"
        onClick={onOpen}>
        <Image width={"100%"} src={wine_picture} />
        <CellarModal isOpen={isOpen} onClose={onClose} />
      </HStack>
    </Link>
  );
}
