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
import Room from "../components/Room";

export default function Cellar() {
  return (
    <Box bg={"#333333"} minH={"1920px"}>
      <Box px={4}>
        <Box mt={3} px={3} py={3} rounded={"md"} bg={"#2C4934"}>
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

        <Grid
          mt={10}
          px={{
            sm: 10,
            lg: 40,
          }}
          columnGap={4}
          rowGap={8}
          templateColumns={"repeat(5, 1fr)"}>
          <Box position="relative" overflow={"hidden"} mb={2} rounded="md">
            <Image
              height={110}
              width={55}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </Box>
          <Box position="relative" overflow={"hidden"} mb={2} rounded="md">
            <Image
              height={110}
              width={55}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </Box>
          <Box position="relative" overflow={"hidden"} mb={2} rounded="md">
            <Image
              height={110}
              width={55}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </Box>
          <Box position="relative" overflow={"hidden"} mb={2} rounded="md">
            <Image
              height={110}
              width={55}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </Box>
          <Box position="relative" overflow={"hidden"} mb={2} rounded="md">
            <Image
              height={110}
              width={55}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </Box>
          <Box position="relative" overflow={"hidden"} mb={2} rounded="md">
            <Image
              height={110}
              width={55}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </Box>
          <Box position="relative" overflow={"hidden"} mb={2} rounded="md">
            <Image
              height={110}
              width={55}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
