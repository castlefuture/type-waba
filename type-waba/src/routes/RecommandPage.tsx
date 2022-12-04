import { Box, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function RecommandPage() {
  useEffect(() => {}, []);
  return (
    <Box px={"16px"} py={"30px"} justifyContent="center">
      <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
        <h1>와인 추천</h1>
      </Box>
      <VStack mt={"240px"} spacing={"0"}>
        <Text color={"#ffffff"}>Hi</Text>
      </VStack>
    </Box>
  );
}
