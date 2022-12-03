import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetail } from "../api";
import FindListBox from "../components/FindListBox";

import FindListBoxCellar from "../components/FindListBoxCellar";
import { IWine } from "../types";

export default function FindResult() {
  const { winePk } = useParams();
  const { isLoading, data } = useQuery<IWine>([`wines`, winePk], postDetail);

  const wine_id = data?.wine_detail.wine_id;

  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        검색 결과
      </Box>
      <Box mb={"40px"}>
        <Box mb={"20px"}>
          <Text as="b" fontSize="14px" color={"#F8F8F8"}>
            몬테스, 앤젤스 시크릿 카르메네르
          </Text>
          <Text fontSize="14px" color={"#F8F8F8"}>
            유사한 와인입니다.
          </Text>
        </Box>
        <FindListBoxCellar />
        <FindListBoxCellar />
        <FindListBox />
        <FindListBox />
        <FindListBox />
      </Box>
    </VStack>
  );
}
