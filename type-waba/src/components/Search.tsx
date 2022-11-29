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
      <Box>
        <VStack>
          <Text fontSize="sm" color={"#F8F8F8"}>
            wine_id : {wine_id}
          </Text>
          <Text as="b" noOfLines={2} fontSize="md" color={"#F8F8F8"}>
            name : {kname}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}
