import { Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <Stack
      bg={"#333333"}
      justifyContent={"center"}
      alignItems="center"
      width={"390px"}
      py={"30px"}
      px={"16px"}
      direction={"row"}
      spacing={{
        sm: 4,
        md: 0,
      }}
      borderBottomWidth={1}>
      <Link to={`/login`}>
        <Image width={"167px"} src={logo} />
      </Link>
    </Stack>
  );
}
