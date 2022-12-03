import { Box, Button, Grid, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FindListBoxCellar() {
  return (
    <Link to={`/wines/11`}>
      <Box mb={3} bg={"#D1654E"} w={"100%"} height={"106px"} rounded="8px">
        <Grid templateColumns={"1fr 5fr"}>
          <HStack
            width={"60px"}
            height={"106px"}
            bg={"#ffffff"}
            position="relative"
            overflow={"hidden"}
            roundedLeft={"8px"}>
            <Image
              width={"100%"}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
            />
          </HStack>
          <HStack px={"10px"} py={2}>
            <Box>
              <Text as="b" fontSize="14px" color={"#FAF4E1"}>
                몬테스, 엔젤스 시크릿 카르메네르
              </Text>
              <Text fontSize="10px" color={"#FAF4E1"}>
                몬테스
              </Text>
              <Text mt={"10px"} fontSize="12px" color={"#FAF4E1"}>
                레드와인
              </Text>
              <Box width={"100%"} justifyItems={"flex-end"}>
                <Button
                  width={"78px"}
                  height={"29px"}
                  fontSize={"14px"}
                  bg={"#333333"}
                  color={"#FAF4E1"}
                  rounded={"4px"}>
                  in cellar
                </Button>
              </Box>
            </Box>
          </HStack>
        </Grid>
      </Box>
    </Link>
  );
}
