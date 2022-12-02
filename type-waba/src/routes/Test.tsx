import { Box, Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { postReview } from "../api";
import { IReview } from "../types";

export default function Test() {
  const { isLoading, data } = useQuery<IReview>([], postReview);
  console.log(data?.wine.ename);
  console.log(data?.wine_review.assessment);

  return (
    <Box>
      hi
      {/*       <Button
        onClick={() => {
          loadReview();
        }}>
        go
      </Button> */}
    </Box>
  );
}
