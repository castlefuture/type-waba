import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { postDetail } from "../api";
import CellarAddModal from "../components/CellarAddModal";
import { IWine } from "../types";

export default function SearchDetail() {
  const { winePk } = useParams();
  const { isLoading, data } = useQuery<IWine>([`wines`, winePk], postDetail);

  const wine_id = data?.wine_detail.wine_id;

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box mb={"20px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        검색 결과
      </Box>
      <Grid gap={"20px"} templateColumns={"131px 207px"}>
        <HStack
          width={"131px"}
          height={"291px"}
          bg={"#ffffff"}
          position="relative"
          overflow={"hidden"}
          rounded={"8px"}>
          <Image width={"100%"} src={data?.wine_detail.wine_picture} />
        </HStack>
        <Box>
          <Button
            height={"19px"}
            px={"5px"}
            fontSize={"10px"}
            rounded={"4px"}
            bg={"#EB5E27"}
            color={"#FAF4E1"}>
            {data?.wine_detail.winetype}와인
          </Button>
          <Text as="b" noOfLines={2} fontSize={"14px"} color={"#F8F8F8"}>
            {data?.wine_detail.kname}
          </Text>
          <Text noOfLines={1} fontSize={"10px"} color={"#F8F8F8"}>
            {data?.wine_detail.ename}
          </Text>
          <VStack alignItems="flex-start" mt={5} spacing={"2px"}>
            <Text fontSize={"12px"} color={"#F8F8F8"} noOfLines={1}>
              양조장 : {data?.wine_detail.winery}
            </Text>
            <Text fontSize={"12px"} color={"#F8F8F8"}>
              국가 : {data?.wine_detail.kr_country}
            </Text>
            <Text fontSize={"12px"} color={"#F8F8F8"}>
              생산지역 : {data?.wine_detail.kr_region}
            </Text>
          </VStack>
          <Box mt={3} px={3} py={3} rounded={"xl"} bg={"#2C4934"}>
            <Grid templateColumns={"1fr 2fr 1.2fr"}>
              <VStack alignItems="flex-start">
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  당도
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  산미
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  바디감
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  타닌감
                </Text>
              </VStack>
              <VStack>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
              </VStack>
              <VStack alignItems="flex-end">
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  {data?.wine_detail.sweet}
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  {data?.wine_detail.acidic}
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  {data?.wine_detail.body}
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  {data?.wine_detail.tannic}
                </Text>
              </VStack>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <VStack width={"100%"} alignItems="flex-start" spacing={5}>
        <Box>
          <Text as="b" fontSize="md" color={"#F8F8F8"}>
            포도품종
          </Text>
          <Text fontSize="sm" color={"#F8F8F8"}>
            {data?.wine_detail.kr_grape_list}
          </Text>
        </Box>
        <Box>
          <Text as="b" fontSize="md" color={"#F8F8F8"}>
            노트
          </Text>
          <Text fontSize="sm" color={"#F8F8F8"}>
            {data?.wine_detail.notes_list}
          </Text>
        </Box>
        <Box>
          <Text as="b" fontSize="md" color={"#F8F8F8"}>
            추천 음식
          </Text>
          <Text fontSize="sm" color={"#F8F8F8"}>
            {data?.wine_detail.food_list}
          </Text>
        </Box>
      </VStack>
      <Button
        width={"169px"}
        height={"45px"}
        fontSize={"20px"}
        bg={"#D1654E"}
        color={"#FAF4E1"}
        onClick={onOpen}>
        셀러에 담기
      </Button>
      <CellarAddModal isOpen={isOpen} onClose={onClose} wine_id={wine_id} />
    </VStack>
  );
}
