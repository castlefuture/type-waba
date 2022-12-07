import { Box, Grid, HStack, Image, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

// 와이너리 정보 받아야함
export default function RecommendThemeListBox() {
  return (
    <Link to={`/wines/$11`}>
      <Box mb={3} bg={"#2C4934"} w={"100%"} height={"106px"} rounded="8px">
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
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170694.png"
            />
          </HStack>
          <HStack px={"10px"} py={2}>
            <Box>
              <Text as="b" fontSize="14px" color={"#FAF4E1"}>
                와인 이름
              </Text>
              <Text fontSize="10px" color={"#FAF4E1"}>
                양조장
              </Text>
              <Text mt={"10px"} fontSize="12px" color={"#FAF4E1"}>
                레드와인
              </Text>
            </Box>
          </HStack>
        </Grid>
      </Box>
    </Link>
  );
}
