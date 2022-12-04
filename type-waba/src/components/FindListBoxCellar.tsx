import { Box, Button, Grid, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ISimilarCeller } from "../types";

export default function FindListBoxCellar({
  wine_id,
  wine_picture,
  winetype,
  kname,
  winery,
}: ISimilarCeller) {
  return (
    <Link to={`/wines/${wine_id}`}>
      <Box mb={3} bg={"#D1654E"} w={"100%"} height={"106px"} rounded="8px">
        <Grid w={"100%"} templateColumns={"1fr 5fr"}>
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
                {winery}
              </Text>

              <HStack w={"100%"}>
                <Text mt={"10px"} fontSize="12px" color={"#FAF4E1"}>
                  {winetype}
                </Text>
                <Link to={`/reviews/${wine_id}`}>
                  <Button
                    width={"78px"}
                    height={"29px"}
                    fontSize={"14px"}
                    bg={"#333333"}
                    color={"#FAF4E1"}
                    rounded={"4px"}>
                    review
                  </Button>
                </Link>
              </HStack>
            </Box>
          </HStack>
        </Grid>
      </Box>
    </Link>
  );
}
