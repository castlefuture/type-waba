import { Box, Input, Text, VStack } from "@chakra-ui/react";
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
        height={"41px"}
        fontSize={"16px"}
        bg={"#333333"}
        border={"1px"}
        borderColor={"#FAF4E1"}
        color={"#FAF4E1"}>
        <Text fontSize="sm" color={"#F8F8F8"}>
          wine_id : {wine_id}
        </Text>
        <Text as="b" noOfLines={2} fontSize="md" color={"#F8F8F8"}>
          name : {kname}
        </Text>
      </Box>
    </Link>
  );
}
