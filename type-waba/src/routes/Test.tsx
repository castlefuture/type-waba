import { Box, Button } from "@chakra-ui/react";
import axios from "axios";

export default function Test() {
  const checkUser = () => {
    axios
      .post("http://3.38.2.131:8000/api/v1/winesearch/detail/11")
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        // console.log("User token", response.data.jwt);
        // localStorage.setItem("token", response.data.jwt);
      });
  };

  return (
    <Box bg={"#333333"} minH={"1920px"}>
      <Button onClick={checkUser}>hihi</Button>
    </Box>
  );
}
