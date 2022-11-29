import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems="flex-start">
      <Box position="relative" overflow={"hidden"} mb={2} rounded="3xl">
        <Image
          minH="280"
          src={
            "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/8ef7a4b0-79b0-439c-9da0-4a170ad4090d.jpeg?im_w=720"
          }
        />
        <Button
          variant={"unstyled"}
          position="absolute"
          top={2}
          right={0}
          color="white">
          <FaRegHeart size="20px" />
        </Button>
      </Box>
      <Grid gap={2} templateColumns={"6fr 1fr"}>
        <Text as="b" noOfLines={1} fontSize="md">
          시더시티(Cedar City), 유타, 미국
        </Text>
        <HStack
          _hover={{
            color: "red.100",
          }}
          spacing={1}
          alignItems="center">
          <FaStar size={12} />
          <Text>5.0</Text>
        </HStack>
      </Grid>

      <Text fontSize={"sm"} color={gray}>
        Seoul, S. Korea
      </Text>

      <Text fontSize={"sm"} color={gray}>
        <Text as="b">$72</Text>/ night
      </Text>
    </VStack>
  );
}
