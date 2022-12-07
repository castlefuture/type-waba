import { Box, HStack, Image, Img, Text } from "@chakra-ui/react";
import RecommendThemeListBox from "../components/RecommendThemeListBox";
export default function Recommend() {
  return (
    <Box px={"16px"} py={"30px"} justifyContent="flex-start">
      <Box mb={"20px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        와인 추천
      </Box>
      <Box>
        <Box mt={"20px"} mb={"40px"}>
          <Text fontSize="14px" color={"#F8F8F8"}>
            <Text as="b">#모험적인</Text> 와인을 좋아하는 당신에게 제안하는
          </Text>
          <Text fontSize="14px" color={"#F8F8F8"}>
            추천 와인입니다.
          </Text>
        </Box>
        <HStack>
          <Box width={"131px"} minH={"10px"} bg={"#fff123"}>
            <Image
              width={"100%"}
              rounded={"16px"}
              src="https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170694.png"
            />
            <Text fontSize={"14px"} color={"#F8F8F8"}>
              와인이름
            </Text>
            <Text fontSize={"14px"} color={"#F8F8F8"}>
              와인이름
            </Text>
            <Text fontSize={"14px"} color={"#F8F8F8"}>
              와인이름
            </Text>
          </Box>
        </HStack>
        <RecommendThemeListBox />
      </Box>
    </Box>
  );
}
