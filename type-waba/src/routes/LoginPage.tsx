import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { setCookie } from "../cookie";
import mainimage from "../img/mainimage.png";

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
        localStorage.setItem("token", response.data.token.access);
        const accessToken = response.data.token.access;
        setCookie("access", `${accessToken}`);
        console.log("Well done!");
        console.log("User token", { accessToken });
        navigate("/");
      });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <Flex mt={"120px"} px={"16px"} py={"30px"} justifyContent="center">
      <VStack width={"206px"} alignContent="center">
        <Image mb={"20px"} width={"167px"} src={mainimage} rounded="full" />
        <VStack mb={"20px"}>
          <Input
            mb={"6px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#FAF4E1"}
            color={"#333333"}
            value={email}
            rounded="none"
            px={"10px"}
            variant={"unstyled"}
            placeholder="이메일"
            _placeholder={{ color: "#333333" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            mt={"8px"}
            height={"45px"}
            fontSize={"16px"}
            bg={"#FAF4E1"}
            color={"#333333"}
            value={password}
            rounded="none"
            px={"10px"}
            variant={"unstyled"}
            placeholder="비밀번호"
            _placeholder={{ color: "#333333" }}
            onChange={(event) => {
              setPassword(event.target.value);
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
          로그인
        </Button>

        <Link to={`/signup`}>
          <Button
            width={"206px"}
            fontSize={"12px"}
            color={"#FAF4E1"}
            fontWeight={"thin"}
            variant="link">
            회원가입
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
