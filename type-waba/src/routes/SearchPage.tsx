import { Box, Input, Text, VStack } from "@chakra-ui/react";
import Search from "../components/Search";

import { useEffect, useState } from "react";

import axios from "axios";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [wineName, setWineName] = useState([]);

  const onChangeHandler = (text: string) => {
    setInputValue(text);
  };

  useEffect(() => {
    console.log(inputValue);
    const loadWines = async () => {
      const response = await axios.get(
        `http://3.38.2.131:8000/api/v1/winesearch/?search=${inputValue}`
      );
      setWineName(response.data);
      console.log(wineName);
    };
    loadWines();
  }, [inputValue]);
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
          // _hover={{ bg: "#FAF4E1" }}
          bg={"#FAF4E1"}
          color={"#333333"}
          value={inputValue}
          type="text"
          rounded={"none"}
          onChange={(event) => onChangeHandler(event.target.value)}
          px={"10px"}
          variant={"unstyled"}
          placeholder="와인 이름을 입력해주세요."
        />
        {wineName.map((search: { wine_id: number; kname: string }) => (
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
