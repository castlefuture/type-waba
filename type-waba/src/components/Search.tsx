import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IRoomProps {
  wine_id: number;
  kname: string;
  pk: number;
}

export default function Search({ pk, wine_id, kname }: IRoomProps) {
  return (
    <Link to={`/wines/${pk}`}>
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
