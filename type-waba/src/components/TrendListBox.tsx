import { Box, Grid, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ITrend } from "../types";

export default function TrendListBox({
  wine_id,
  wine_picture,
  winetype,
  kname,
  ename,
}: ITrend) {
  return (
    <Link to={`/wines/${wine_id}`}>
      <Box mb={3} bg={"#2C4934"} w={"100%"} height={"106px"} rounded="8px">
        <Grid templateColumns={"1fr 5fr"}>
          <HStack
            width={"60px"}
            height={"106px"}
            bg={"#ffffff"}
            position="relative"
            overflow={"hidden"}
            roundedLeft={"8px"}>
            <Image width={"100%"} src={wine_picture} />
          </HStack>
          <HStack px={"10px"} py={2}>
            <Box>
              <Text as="b" fontSize="14px" color={"#FAF4E1"}>
                {kname}
              </Text>
              <Text fontSize="10px" color={"#FAF4E1"}>
                몬테스
              </Text>
              <Text mt={"10px"} fontSize="12px" color={"#FAF4E1"}>
                {winetype}
              </Text>
            </Box>
          </HStack>
        </Grid>
      </Box>
    </Link>
  );
}
