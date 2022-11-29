import { Box, Input, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Search from "../components/Search";
import { getSearchs } from "../api";
import RoomSkeleton from "../components/RoomSkeleton";
import { useState } from "react";

interface ISearch {
  wine_id: number;
  kname: string;
}

export default function SearchPage() {
  const { isLoading, data } = useQuery<ISearch[]>(["searchs"], getSearchs);
  const [inputValue, setInputValue] = useState("");
  return (
    <Box bg={"#333333"} minH={"1920px"}>
      <Box w="100%" as="b" fontSize="xl" color={"#FAF4E1"}>
        <h1>와인 검색</h1>
      </Box>
      <Box mt={10} px={5}>
        <Input
          value={inputValue}
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          variant={"filled"}
          placeholder="와인 이름을 입력해주세요."
        />
        <Text>{inputValue}</Text>
      </Box>
      {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {data?.map((search) => (
        <Search
          wine_id={search.wine_id}
          kname={search.kname}
          pk={search.wine_id}
        />
      ))}
    </Box>
  );
}
