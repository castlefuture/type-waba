import { Box, Flex } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root() {
  return (
    <Flex justifyContent="center">
      <Box
        alignItems={"center"}
        bg={"#333333"}
        width={"390px"}
        height={"844px"}>
        <Header />
        <Outlet />
        <ReactQueryDevtools />
      </Box>
    </Flex>
  );
}
