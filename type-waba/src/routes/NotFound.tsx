import { Text, Heading, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack bg="gray.100" justifyContent={"center"} minH="100vh">
      <Heading>Page not found.</Heading>
      <Text>It seems that you're lost.</Text>
      <Link to="/">
        <Button colorScheme={"green"} variant={"solid"}>
          Go Home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}
