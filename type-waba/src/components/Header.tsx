import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaWineBottle, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <Stack
      bg={"#333333"}
      justifyContent={"space-between"}
      alignItems="center"
      width={"390px"}
      py={"30px"}
      px={"16px"}
      direction={"row"}
      spacing={{
        sm: 4,
        md: 0,
      }}
      borderBottomWidth={1}>
      <Text>wabawachi</Text>
    </Stack>
  );
}
