import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomeButton from "../components/HomeButton";
import HomeCellarlist from "../components/HomeCellarList";
import TrendListBox from "../components/TrendListBox";

export default function Home() {
  const [recentCellar, setRecentCellar] = useState([]);
  const [trend, setTrend] = useState([]);
  const loadRecentCellar = async () => {
    const response = await axios.post(
      `http://3.38.2.131:8000/api/v1/wineceller/recentWines`,
      {
        user_id: 3,
      }
    );
    setRecentCellar(response.data);
  };

  const loadTrend = async () => {
    const response = await axios.get(
      `http://3.38.2.131:8000/api/v1/winerecommend/trending_wine`
    );
    setTrend(response.data);
  };
  useEffect(() => {
    loadRecentCellar();
    loadTrend();
  }, []);
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
        <HomeButton link="recommend" name="와인 추천" />
      </Grid>

      <Box mb={"10px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        최근 수집한 와인
      </Box>

      <HStack px={"16px"} width={"390px"}>
        {recentCellar.map(
          (cellar: {
            wine_id: number;
            wine_picture: string;
            winetype: string;
            kname: string;
            ename: string;
          }) => (
            <HomeCellarlist
              wine_id={cellar.wine_id}
              wine_picture={cellar.wine_picture}
              winetype={cellar.winetype}
              kname={cellar.kname}
              ename={cellar.ename}
            />
          )
        )}
      </HStack>
      <Box mb={"10px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        실시간 트렌드 와인
      </Box>
      {trend.map(
        (cellar: {
          wine_id: number;
          wine_picture: string;
          winetype: string;
          kname: string;
          ename: string;
        }) => (
          <TrendListBox
            wine_id={cellar.wine_id}
            wine_picture={cellar.wine_picture}
            winetype={cellar.winetype}
            kname={cellar.kname}
            ename={cellar.ename}
          />
        )
      )}
    </VStack>
  );
}
