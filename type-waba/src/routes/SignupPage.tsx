import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
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
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box mb={"10px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        와인 검색
      </Box>
      <Box w={"100%"} alignContent="center">
        <VStack mb={"20px"}>
          <Input
            mb={"2px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#333333"}
            border={"1px"}
            borderColor={"#FAF4E1"}
            color={"#FAF4E1"}
            value={email}
            rounded="none"
            variant={"filled"}
            placeholder="이메일"
            _placeholder={{ color: "#FAF4E1" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            mt={"10px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#333333"}
            border={"1px"}
            borderColor={"#FAF4E1"}
            color={"#FAF4E1"}
            value={email}
            rounded="none"
            variant={"filled"}
            placeholder="비밀번호"
            _placeholder={{ color: "#FAF4E1" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <Input
            mt={"10px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#333333"}
            border={"1px"}
            borderColor={"#FAF4E1"}
            color={"#FAF4E1"}
            value={email}
            rounded="none"
            variant={"filled"}
            placeholder="닉네임"
            _placeholder={{ color: "#FAF4E1" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            mt={"10px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#333333"}
            border={"1px"}
            borderColor={"#FAF4E1"}
            color={"#FAF4E1"}
            value={email}
            rounded="none"
            variant={"filled"}
            placeholder="생년월일"
            _placeholder={{ color: "#FAF4E1" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            mt={"10px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#333333"}
            border={"1px"}
            borderColor={"#FAF4E1"}
            color={"#FAF4E1"}
            value={email}
            rounded="none"
            variant={"filled"}
            placeholder="지역"
            _placeholder={{ color: "#FAF4E1" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            mt={"10px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#333333"}
            border={"1px"}
            borderColor={"#FAF4E1"}
            color={"#FAF4E1"}
            value={email}
            rounded="none"
            variant={"filled"}
            placeholder="성별"
            _placeholder={{ color: "#FAF4E1" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
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
          회원가입
        </Button>
      </Box>
    </VStack>
  );
}
