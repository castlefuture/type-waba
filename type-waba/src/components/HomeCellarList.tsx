import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function HomeCellarlist() {
  return (
    <Box marginRight={"15px"} marginLeft={"5px"}>
      <VStack alignItems="flex-start">
        <Box position="relative" overflow={"hidden"} mb={2} rounded={"16px"}>
          <Image
            width={"131px"}
            height={"240px"}
            src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png"
          />
        </Box>
        <Box width={"131px"}>
          <Text as="b" noOfLines={1} fontSize="md" color={"#F8F8F8"}>
            휴잇슨, 모노폴 마더바인 쉬라즈
          </Text>
          <Text noOfLines={1} fontSize="sm" color={"#F8F8F8"}>
            Hewitson, Mother Vine Shiraz
          </Text>
          <Text noOfLines={1} fontSize="md" color={"#F8F8F8"}>
            레드와인
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
