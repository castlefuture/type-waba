import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IRecentCellar } from "../types";

export default function HomeCellarlist({
  wine_id,
  wine_picture,
  winetype,
  kname,
  ename,
}: IRecentCellar) {
  return (
    <Link to={`reviews/${wine_id}`}>
      <Box marginRight={"15px"} marginLeft={"5px"}>
        <VStack alignItems="flex-start">
          <Box position="relative" overflow={"hidden"} mb={2} rounded={"16px"}>
            <Image width={"131px"} height={"240px"} src={wine_picture} />
          </Box>
          <Box width={"131px"}>
            <Text as="b" noOfLines={1} fontSize="md" color={"#F8F8F8"}>
              {kname}
            </Text>
            <Text noOfLines={1} fontSize="sm" color={"#F8F8F8"}>
              {ename}
            </Text>
            <Text noOfLines={1} fontSize="md" color={"#F8F8F8"}>
              {winetype}
            </Text>
          </Box>
        </VStack>
      </Box>
    </Link>
  );
}
