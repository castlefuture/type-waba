import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { postReview } from "../api";
import { IReview } from "../types";

export default function CellarReview() {
  const { reviewPk } = useParams();
  const { isLoading, data } = useQuery<IReview>(
    [`reviews`, reviewPk],
    postReview
  );
  console.log(data?.wine.ename);
  console.log(data?.wine_review.assessment);
  return (
    <Box py={"30px"} bg={"#FAF4E1"}>
      <VStack>
        <Box>
          <Grid gap={"15px"} templateColumns={"131px 181px"}>
            <HStack
              width={"131px"}
              height={"291px"}
              bg={"#ffffff"}
              position="relative"
              overflow={"hidden"}
              rounded={"8px"}>
              <Image width={"100%"} src={data?.wine.wine_picture} />
            </HStack>
            <VStack justify={"center"} alignItems="flex-start">
              <Box>
                <Text fontWeight={"bold"} fontSize={"14px"} color={"#333333"}>
                  2022년 12월 11일
                </Text>
              </Box>
              <Box>
                <Text fontSize={"14px"} color={"#333333"}>
                  {data?.wine_review.hashtag}
                </Text>
              </Box>
            </VStack>
          </Grid>
          <Box mt={"15px"}>
            <Button
              height={"19px"}
              mb={"10px"}
              px={"5px"}
              fontSize={"10px"}
              rounded={"4px"}
              bg={"#EB5E27"}
              color={"#FAF4E1"}>
              {data?.wine.winetype}와인
            </Button>
            <Text as="b" noOfLines={2} fontSize={"14px"} color={"#333333"}>
              {data?.wine.kname}
            </Text>
            <Text noOfLines={1} fontSize={"10px"} color={"#333333"}>
              {data?.wine.ename}
            </Text>
            <VStack alignItems="flex-start" mt={5} spacing={"2px"}>
              <Text fontSize={"12px"} color={"333333"} noOfLines={1}>
                양조장 : {data?.wine.winery}
              </Text>
              <Text fontSize={"12px"} color={"333333"}>
                국가 : {data?.wine.kr_country}
              </Text>
              <Text fontSize={"12px"} color={"333333"}>
                생산지역 : {data?.wine.kr_region}
              </Text>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
