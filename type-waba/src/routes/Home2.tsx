import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home2() {
  return (
    <Box bg={"#333333"} minH={"1920px"}>
      <Box px={5}>
        <Grid
          mt={10}
          mb={10}
          px={{
            sm: 10,
            lg: 40,
          }}
          columnGap={4}
          rowGap={8}
          templateColumns={"1fr 1fr"}>
          <Button bg={"#2C4934"} color={"#FAF4E1"}>
            와인 검색
          </Button>
          <Button bg={"#2C4934"} color={"#FAF4E1"}>
            유사 와인 찾기
          </Button>
          <Button bg={"#2C4934"} color={"#FAF4E1"}>
            와인 셀러
          </Button>
          <Button bg={"#2C4934"} color={"#FAF4E1"}>
            와인 추천
          </Button>
        </Grid>

        <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
          <h1>최근 수집한 와인</h1>
        </Box>
        <HStack>
          <Box mt={5}>
            <VStack alignItems="flex-start">
              <Box position="relative" overflow={"hidden"} mb={2} rounded="3xl">
                <Image
                  width={131}
                  height={240}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box boxSize="131px">
                <Text as="b" noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  휴잇슨, 모노폴 마더바인 쉬라즈
                </Text>
                <Text noOfLines={1} fontSize="sm" color={"#F8F8F8"}>
                  Hewitson, Mother Vine Shiraz
                </Text>
                <Text noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  레드와인
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box mt={5}>
            <VStack alignItems="flex-start">
              <Box position="relative" overflow={"hidden"} mb={2} rounded="3xl">
                <Image
                  width={131}
                  height={240}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box boxSize="131px">
                <Text as="b" noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  휴잇슨, 모노폴 마더바인 쉬라즈
                </Text>
                <Text noOfLines={1} fontSize="sm" color={"#F8F8F8"}>
                  Hewitson, Mother Vine Shiraz
                </Text>
                <Text noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  레드와인
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box mt={5}>
            <VStack alignItems="flex-start">
              <Box position="relative" overflow={"hidden"} mb={2} rounded="3xl">
                <Image
                  width={131}
                  height={240}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box boxSize="131px">
                <Text as="b" noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  휴잇슨, 모노폴 마더바인 쉬라즈
                </Text>
                <Text noOfLines={1} fontSize="sm" color={"#F8F8F8"}>
                  Hewitson, Mother Vine Shiraz
                </Text>
                <Text noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  레드와인
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box mt={5}>
            <VStack alignItems="flex-start">
              <Box position="relative" overflow={"hidden"} mb={2} rounded="3xl">
                <Image
                  width={131}
                  height={240}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box boxSize="131px">
                <Text as="b" noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  휴잇슨, 모노폴 마더바인 쉬라즈
                </Text>
                <Text noOfLines={1} fontSize="sm" color={"#F8F8F8"}>
                  Hewitson, Mother Vine Shiraz
                </Text>
                <Text noOfLines={1} fontSize="md" color={"#F8F8F8"}>
                  레드와인
                </Text>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
