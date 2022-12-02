import { Text } from "@chakra-ui/react";
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
  return <Text>hi</Text>;
}
