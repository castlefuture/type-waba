import { Box, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { postReview } from "../api";
import { IReview } from "../types";

export default function CellarReview() {
  const { reviewPk } = useParams();
  const { isLoading, data } = useQuery<IReview>(
    [`reviews`, reviewPk],
    postReview
  );
  console.log(data?.wine.ename);
  console.log(data?.wine_review.assessment);
  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box
        mb={"20px"}
        w="100%"
        as="b"
        fontSize={"24px"}
        color={"#F8F8F8"}></Box>
    </VStack>
  );
}
