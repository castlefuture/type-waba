import { Box, Button, Input, VStack } from "@chakra-ui/react";
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
    <Box bg={"#333333"} minH={"1920px"}>
      <Box px={5}>
        <VStack>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            variant={"filled"}
            placeholder="Username"
          />
          <Input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            variant={"filled"}
            placeholder="Password"
          />
        </VStack>
        <Button
          onClick={() => {
            checkUser();
          }}
          colorScheme={"red"}
          w="100%">
          Log in
        </Button>
      </Box>
    </Box>
  );
}
