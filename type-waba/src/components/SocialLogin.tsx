import { Box, Button, Divider, HStack, VStack, Text } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.400" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w="100%" leftIcon={<FaGithub />} colorScheme={"telegram"}>
          Continue with GitHub
        </Button>
        <Button w="100%" leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continu with KaKao
        </Button>
      </VStack>
    </Box>
  );
}
