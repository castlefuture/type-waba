import { Box, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Search from "../components/Search";
import { getSearchs } from "../api";
import { useState } from "react";

interface ISearch {
  wine_id: number;
  kname: string;
}

export default function SearchPage() {
  const { isLoading, data } = useQuery<ISearch[]>(["searchs"], getSearchs);
  console.log(data);
  const [inputValue, setInputValue] = useState("");
  return (
    <Box px={"16px"} py={"30px"} justifyContent="center">
      <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
        <h1>와인 검색</h1>
      </Box>
      <VStack mt={"240px"} spacing={"0"}>
        <Input
          width={"246px"}
          height={"41px"}
          fontSize={"16px"}
          bg={"#FAF4E1"}
          color={"#333333"}
          value={inputValue}
          type="text"
          rounded={"none"}
          onChange={(event) => setInputValue(event.target.value)}
          variant={"filled"}
          placeholder="와인 이름을 입력해주세요."
        />

        {data?.map((search) => (
          <Search
            wine_id={search.wine_id}
            kname={search.kname}
            pk={search.wine_id}
          />
        ))}
      </VStack>
    </Box>
  );
}
