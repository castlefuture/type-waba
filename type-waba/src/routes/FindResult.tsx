import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetail } from "../api";
import FindListBox from "../components/FindListBox";

import FindListBoxCellar from "../components/FindListBoxCellar";
import { IWine } from "../types";

// 추천 api를 가져와야함

export default function FindResult() {
  const { winePk } = useParams();
  const { isLoading, data } = useQuery<IWine>([`wines`, winePk], postDetail);

  const wine_id = data?.wine_detail.wine_id;

  const [similarCellar, setSimilarCellar] = useState([]);
  const [similarSearch, setSimilarSearch] = useState([]);

  const loadSimilarCellar = async () => {
    const response = await axios.post(
      `http://3.38.2.131:8000/api/v1/winerecommend/similar_celler`,
      {
        user_id: 3,
      }
    );
    setSimilarCellar(response.data);
  };

  const loadSimilarSearch = async () => {
    const response = await axios.post(
      `http://3.38.2.131:8000/api/v1/winerecommend/similar_all`,
      {
        user_id: 3,
      }
    );
    setSimilarSearch(response.data);
  };

  useEffect(() => {
    loadSimilarCellar();
    loadSimilarSearch();
  }, []);

  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        검색 결과
      </Box>
      <Box mb={"40px"}>
        <Box mb={"20px"}>
          <Text fontSize="14px" color={"#F8F8F8"}>
            <Text as="b">{data?.wine_detail.kname}</Text> 와
          </Text>
          <Text fontSize="14px" color={"#F8F8F8"}>
            유사한 와인입니다.
          </Text>
        </Box>

        {similarCellar.map(
          (cellar: {
            wine_id: number;
            wine_picture: string;
            winetype: string;
            kname: string;
            winery: string;
          }) => (
            <FindListBoxCellar
              wine_id={cellar.wine_id}
              wine_picture={cellar.wine_picture}
              winetype={cellar.winetype}
              kname={cellar.kname}
              winery={cellar.winery}
            />
          )
        )}

        {similarSearch.map(
          (search: {
            wine_id: number;
            wine_picture: string;
            winetype: string;
            kname: string;
            winery: string;
          }) => (
            <FindListBox
              wine_id={search.wine_id}
              wine_picture={search.wine_picture}
              winetype={search.winetype}
              kname={search.kname}
              winery={search.winery}
            />
          )
        )}
      </Box>
    </VStack>
  );
}
