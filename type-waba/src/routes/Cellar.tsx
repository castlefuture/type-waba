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
import CellarThumb from "../components/CellarThumb";
import Room from "../components/Room";

export default function Cellar() {
  return (
    <VStack px={"16px"} py={"5px"} justifyContent="center">
      <Box width={"358px"} mt={3} px={3} py={3} rounded={"md"} bg={"#2C4934"}>
        <Text as="b" fontSize="16px" color={"#FAF4E1"}>
          미래님의 와인 셀러
        </Text>
        <Grid px={2} mt={3} gap={6} templateColumns={"1fr 1fr 1fr"}>
          <Box bg={"#313A34"} rounded="md" px={3} py={3} textAlign="center">
            <Text as="b" fontSize="12px" color={"#FAF4E1"}>
              레드와인
            </Text>
            <Text fontSize="12px" color={"#FAF4E1"}>
              30/50
            </Text>
          </Box>
          <Box bg={"#313A34"} rounded="md" px={3} py={3} textAlign="center">
            <Text as="b" fontSize="12px" color={"#FAF4E1"}>
              화이트와인
            </Text>
            <Text fontSize="12px" color={"#FAF4E1"}>
              12/20
            </Text>
          </Box>
          <Box bg={"#313A34"} rounded="md" px={3} py={3} textAlign="center">
            <Text as="b" fontSize="12px" color={"#FAF4E1"}>
              기타
            </Text>
            <Text fontSize="12px" color={"#FAF4E1"}>
              3/10
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
        <h1>모아보기</h1>
      </Box>
      <Grid
        mt={10}
        columnGap={"20px"}
        rowGap={"20px"}
        templateColumns={"repeat(5, 1fr)"}>
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
        <CellarThumb />
      </Grid>
    </VStack>
  );
}
