import { Box } from "@chakra-ui/react";
import axios from "axios";

export default function Test() {
  const response = axios
    .post(`http://3.38.2.131:8000/api/v1/winesearch/detail/231`, {
      //보내고자 하는 데이터
      user_id: 3,
    })
    .then((response) => {
      console.log("Well done!");
    });

  return <Box>hi</Box>;
}
