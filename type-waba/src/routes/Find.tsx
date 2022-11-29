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

export default function Find() {
  return (
    <Box bg={"#333333"} minH={"1920px"}>
      <Box px={4}>
        <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
          <h1>유사 와인 추천</h1>
        </Box>
        <Box mt={10} px={5}>
          <Input variant={"filled"} placeholder="와인 이름을 입력해주세요." />
          <VStack></VStack>
        </Box>

        <Box>
          <Text as="b" fontSize="16px" color={"#FAF4E1"}>
            최근 검색한 와인
          </Text>
          <Box mb={3} bg={"#2C4934"} w={"100%"} height={"106px"} rounded="8px">
            <Grid templateColumns={"1fr 5fr"}>
              <Box position="relative" overflow={"hidden"} mb={2}>
                <Image
                  height={106}
                  width={76}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box px={2} py={2}>
                <Text as="b" fontSize="14px" color={"#FAF4E1"}>
                  몬테스, 엔젤스 시크릿 카르메네르
                </Text>
                <Text fontSize="10px" color={"#FAF4E1"}>
                  몬테스
                </Text>
                <Text fontSize="12px" color={"#FAF4E1"}>
                  레드와인
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box mb={3} bg={"#2C4934"} w={"100%"} height={"106px"} rounded="8px">
            <Grid templateColumns={"1fr 5fr"}>
              <Box position="relative" overflow={"hidden"} mb={2}>
                <Image
                  height={106}
                  width={76}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box px={2} py={2}>
                <Text as="b" fontSize="14px" color={"#FAF4E1"}>
                  몬테스, 엔젤스 시크릿 카르메네르
                </Text>
                <Text fontSize="10px" color={"#FAF4E1"}>
                  몬테스
                </Text>
                <Text fontSize="12px" color={"#FAF4E1"}>
                  레드와인
                </Text>
              </Box>
            </Grid>
          </Box>{" "}
        </Box>

        <Box>
          <Text as="b" fontSize="16px" color={"#FAF4E1"}>
            최근 수집한 와인
          </Text>
          <Box mb={3} bg={"#2C4934"} w={"100%"} height={"106px"} rounded="8px">
            <Grid templateColumns={"1fr 5fr"}>
              <Box position="relative" overflow={"hidden"} mb={2}>
                <Image
                  height={106}
                  width={76}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box px={2} py={2}>
                <Text as="b" fontSize="14px" color={"#FAF4E1"}>
                  몬테스, 엔젤스 시크릿 카르메네르
                </Text>
                <Text fontSize="10px" color={"#FAF4E1"}>
                  몬테스
                </Text>
                <Text fontSize="12px" color={"#FAF4E1"}>
                  레드와인
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box mb={3} bg={"#2C4934"} w={"100%"} height={"106px"} rounded="8px">
            <Grid templateColumns={"1fr 5fr"}>
              <Box position="relative" overflow={"hidden"} mb={2}>
                <Image
                  height={106}
                  width={76}
                  src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
                />
              </Box>
              <Box px={2} py={2}>
                <Text as="b" fontSize="14px" color={"#FAF4E1"}>
                  몬테스, 엔젤스 시크릿 카르메네르
                </Text>
                <Text fontSize="10px" color={"#FAF4E1"}>
                  몬테스
                </Text>
                <Text fontSize="12px" color={"#FAF4E1"}>
                  레드와인
                </Text>
              </Box>
            </Grid>
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
}
