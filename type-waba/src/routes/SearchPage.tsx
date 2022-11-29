import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function SearchPage() {
  return (
    <Box bg={"#333333"} minH={"1920px"}>
      <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
        <h1>와인 검색</h1>
      </Box>
      <Box mt={10} px={5}>
        <Input variant={"filled"} placeholder="와인 이름을 입력해주세요." />
        <VStack></VStack>
      </Box>
    </Box>
  );
}
