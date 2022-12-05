import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ThemeBox(foodscript?: string) {
  return (
    <Box
      px={"10px"}
      py={"10px"}
      width={"358px"}
      height={"358px"}
      bg={"#ff1241"}
      rounded={"8px"}>
      <Box mt={"50px"}>
        {" "}
        <Text fontSize="12px" color={"#F8F8F8"}>
          #지중해요리 #연어 #감바스
        </Text>
        <Text as="b" fontSize="20px" color={"#F8F8F8"}>
          {foodscript}
        </Text>
      </Box>
      <Link to={`/wines/11`}>
        <Button mt={"20px"} px={"10px"} bg={"#ECA748"} color={"#FAF4E1"}>
          자세히 보기
        </Button>
      </Link>
    </Box>
  );
}
