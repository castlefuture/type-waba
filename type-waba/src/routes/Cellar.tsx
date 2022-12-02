import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import CellarThumb from "../components/CellarThumb";

export default function Cellar() {
  const [cellarList, setCellarList] = useState([]);
  const loadCellar = async () => {
    const response = await axios.post(
      `http://3.38.2.131:8000/api/v1/wineceller/`,
      {
        user_id: 3,
      }
    );
    setCellarList(response.data);
  };

  useEffect(() => {
    loadCellar();
  }, []);

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
        {cellarList.map((cellar: { wine_id: number; wine_picture: string }) => (
          <CellarThumb
            wine_id={cellar.wine_id}
            wine_picture={cellar.wine_picture}
          />
        ))}
      </Grid>
    </VStack>
  );
}
