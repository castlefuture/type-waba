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
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { postDetail } from "../api";

export default function SearchDetail() {
  const { winePk } = useParams();
  const { isLoading, data } = useQuery([`wine:${winePk}`], postDetail);
  console.log(data);
  return (
    <Box bg={"#333333"} minH={"1920px"}>
      <Box px={5}>
        <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
          <h1>와인 검색</h1>
        </Box>
        <VStack alignItems="flex-start">
          <Grid gap={2} templateColumns={"2fr 3fr"}>
            <Box position="relative" overflow={"hidden"} mb={2} rounded="3xl">
              <Image
                width={131}
                height={285}
                src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
              />
              <Button
                variant={"unstyled"}
                position="absolute"
                top={2}
                right={0}
                color="white"></Button>
            </Box>
            <Box>
              <Button size="xs" bg={"#EB5E27"} color={"#FAF4E1"}>
                레드와인
              </Button>
              <Text as="b" noOfLines={2} fontSize="md" color={"#F8F8F8"}>
                휴잇슨, 모노폴 마더바인 쉬라즈
              </Text>
              <Text noOfLines={1} fontSize="xs" color={"#F8F8F8"}>
                Hewitson, Mother Vine Shiraz
              </Text>
              <Box mt={5}>
                <Text fontSize="sm" color={"#F8F8F8"}>
                  양조장 : 몬테스
                </Text>
                <Text fontSize="sm" color={"#F8F8F8"}>
                  국가 : 칠레
                </Text>
                <Text fontSize="sm" color={"#F8F8F8"}>
                  생산지역 : 콜차구아 밸리
                </Text>
              </Box>
              <Box mt={3} px={3} py={3} rounded={"xl"} bg={"#2C4934"}>
                <Text fontSize="sm" color={"#F8F8F8"}>
                  당도
                </Text>
                <Text fontSize="sm" color={"#F8F8F8"}>
                  산미
                </Text>
                <Text fontSize="sm" color={"#F8F8F8"}>
                  바디감
                </Text>
                <Text fontSize="sm" color={"#F8F8F8"}>
                  타닌감
                </Text>
              </Box>
            </Box>
          </Grid>

          <VStack alignItems="flex-start" spacing={5}>
            <Box>
              <Text as="b" fontSize="md" color={"#F8F8F8"}>
                포도품종
              </Text>
              <Text fontSize="sm" color={"#F8F8F8"}>
                카르메네르, 카르베 소비뇽
              </Text>
            </Box>
            <Box>
              <Text as="b" fontSize="md" color={"#F8F8F8"}>
                노트
              </Text>
              <Text fontSize="sm" color={"#F8F8F8"}>
                체리, 기죽
              </Text>
            </Box>
            <Box>
              <Text as="b" fontSize="md" color={"#F8F8F8"}>
                추천 음식
              </Text>
              <Text fontSize="sm" color={"#F8F8F8"}>
                치즈, 고기
              </Text>
            </Box>
          </VStack>

          <Button bg={"#D1654E"} color={"#FAF4E1"}>
            셀러에 담기
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
