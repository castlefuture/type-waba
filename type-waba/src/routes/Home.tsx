import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import HomeButton from "../components/HomeButton";
import HomeCellarlist from "../components/HomeCellarList";

export default function Home() {
  const [recentCellar, setRecentCellar] = useState([]);
  const loadRecentCellar = async () => {
    const response = await axios.post(
      `http://3.38.2.131:8000/api/v1/wineceller/recentWines`,
      {
        user_id: 3,
      }
    );
    setRecentCellar(response.data);
  };
  loadRecentCellar();
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
        <HomeButton link="recommand" name="와인 추천" />
      </Grid>

      <Box mb={"10px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        최근 수집한 와인
      </Box>

      <HStack px={"16px"} width={"390px"}>
        <HomeCellarlist />
        <HomeCellarlist />
        <HomeCellarlist />
        <HomeCellarlist />
      </HStack>
    </VStack>
  );
}
