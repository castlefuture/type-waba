import { Box, VStack } from "@chakra-ui/react";
import SignupInput from "../components/SignupInput";

export default function Signup() {
  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box mb={"10px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        회원가입
      </Box>
      <SignupInput />
    </VStack>
  );
}
