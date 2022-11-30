import { Box, Button, Input, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../cookie";

export default function SignupInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const register = () => {
    axios
      .post("http://3.38.2.131:8000/api/v1/users/register/", {
        email: email,
        password: password,
        username: username,
        birthdate: birthdate,
        region: region,
        gender: gender,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User token", response.data.token.access);
        localStorage.setItem("token", response.data.token.access);
        const accessToken = response.data.token.access;
        setCookie("is_login", `${accessToken}`);
        navigate("/");
      });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
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
          value={password}
          rounded="none"
          variant={"filled"}
          placeholder="비밀번호"
          _placeholder={{ color: "#FAF4E1" }}
          onChange={(event) => {
            setPassword(event.target.value);
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
          value={username}
          rounded="none"
          variant={"filled"}
          placeholder="닉네임"
          _placeholder={{ color: "#FAF4E1" }}
          onChange={(event) => {
            setUsername(event.target.value);
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
          value={birthdate}
          rounded="none"
          variant={"filled"}
          placeholder="생년월일(YYYY-MM-DD)"
          _placeholder={{ color: "#FAF4E1" }}
          onChange={(event) => {
            setBirthdate(event.target.value);
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
          value={region}
          rounded="none"
          variant={"filled"}
          placeholder="지역"
          _placeholder={{ color: "#FAF4E1" }}
          onChange={(event) => {
            setRegion(event.target.value);
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
          value={gender}
          rounded="none"
          variant={"filled"}
          placeholder="성별"
          _placeholder={{ color: "#FAF4E1" }}
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
      </VStack>
      <Button
        mb={"4px"}
        height={"48px"}
        fontSize={"20px"}
        onClick={() => {
          register();
        }}
        bg={"#2C4934"}
        color={"#FAF4E1"}
        w="100%">
        회원가입
      </Button>
    </Box>
  );
}
