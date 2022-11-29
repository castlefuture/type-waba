import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkUser = () => {
    axios
      .post("http://3.38.2.131:8000/api/v1/users/auth/", {
        //보내고자 하는 데이터
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        // console.log("User token", response.data.jwt);
        // localStorage.setItem("token", response.data.jwt);
        console.log("User token", response.data.token.access);
        localStorage.setItem("token", response.data.token.access);
        navigate("/");
      });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <Flex mt={"223px"} px={"16px"} py={"30px"} justifyContent="center">
      <Box width={"206px"} alignContent="center">
        <VStack mb={"20px"}>
          <Input
            mb={"6px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#FAF4E1"}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            variant={"filled"}
            placeholder="이메일"
          />
          <Input
            mt={"8px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#FAF4E1"}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            variant={"filled"}
            placeholder="비밀번호"
          />
        </VStack>
        <Button
          mb={"4px"}
          height={"48px"}
          fontSize={"20px"}
          onClick={() => {
            checkUser();
          }}
          bg={"#2C4934"}
          color={"#FAF4E1"}
          w="100%">
          로그인
        </Button>
        <Button
          width={"206px"}
          fontSize={"12px"}
          color={"#FAF4E1"}
          fontWeight={"thin"}
          variant="link">
          회원가입
        </Button>
      </Box>
    </Flex>
  );
}
