import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IWineProps } from "../types";

export default function FindName({ pk, wine_id, kname }: IWineProps) {
  return (
    <Link to={`/finds/${pk}`}>
      <Box
        px={"16px"}
        width={"246px"}
        minH={"41px"}
        fontSize={"16px"}
        bg={"#333333"}
        border={"1px"}
        borderColor={"#FAF4E1"}
        color={"#FAF4E1"}>
        <Text noOfLines={2} color={"#F8F8F8"}>
          {kname}
        </Text>
      </Box>
    </Link>
  );
}
