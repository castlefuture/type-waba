import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import HomeButton from "../components/HomeButton";

export default function Home() {
  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Grid
        mb={"22px"}
        columnGap={"20px"}
        rowGap={"33px"}
        templateColumns={"169px 169px"}>
        <HomeButton link="search" name="와인 검색" />
        <HomeButton link="find" name="유사 와인 찾기" />
        <HomeButton link="cellar" name="와인 셀러" />
        <HomeButton link="search" name="와인 추천" />
      </Grid>

      <Box mb={"10px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        최근 수집한 와인
      </Box>

      <HStack px={"16px"} width={"390px"}>
        <Box marginRight={"15px"} marginLeft={"5px"}>
          <VStack alignItems="flex-start">
            <Box
              position="relative"
              overflow={"hidden"}
              mb={2}
              rounded={"16px"}>
              <Image
                width={"131px"}
                height={"240px"}
                src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
              />
            </Box>
            <Box width={"131px"}>
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
        <Box>
          <VStack alignItems="flex-start">
            <Box
              position="relative"
              overflow={"hidden"}
              mb={2}
              rounded={"16px"}>
              <Image
                width={"131px"}
                height={"240px"}
                src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
              />
            </Box>
            <Box width={"131px"}>
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
    </VStack>
  );
}
