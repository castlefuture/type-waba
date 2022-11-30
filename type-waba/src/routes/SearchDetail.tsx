import { Box, Button, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { getCookie } from "../cookie";

export default function SearchDetail() {
  const [wineInfo, setWineInfo] = useState([]);
  const loadInfos = async () => {
    const response = await axios.get(
      `http://3.38.2.131:8000/api/v1/winesearch/detail/231`,
      {
        headers: {
          authorization: `Bearer ${getCookie("is_login")}`,
        },
      }
    );
    setWineInfo(response.data);
    console.log(wineInfo);
  };

  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box mb={"20px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        검색 결과
      </Box>
      <Button
        onClick={() => {
          loadInfos();
        }}>
        검색
      </Button>
      <Text>{wineInfo[0]}</Text>
    </VStack>
  );
}
