import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecommandListBox from "../components/RecommandListBox";
import ThemeBox from "../components/ThemeBox";
import { IRecommandFood, IRecommandTag } from "../types";

export default function RecommandPage() {
  const [tagRecommand, setTagRecommand] = useState<IRecommandTag>();
  const [tagScript, setTagScript] = useState("");
  const [tagWineList, setTagWineList] = useState([]);
  const [foodRecommand, setFoodRecommand] = useState<IRecommandFood>();
  const [foodScript, setFoodScript] = useState("");
  const [foodWineList, setFoodWineList] = useState([]);

  const loadRecommandTag = async () => {
    const response = await axios.post(
      `http://3.38.2.131:8000/api/v1/winerecommend/hashtag`,
      {
        user_id: 3,
      }
    );
    setTagRecommand(response.data);
    setTagScript(tagRecommand.script);
    setTagWineList(tagRecommand?.wine_list);
    console.log("태그", tagScript);
    console.log("태그와인", tagWineList);
  };

  const loadRecommandFood = async () => {
    const response = await axios.get(
      `http://3.38.2.131:8000/api/v1/winerecommend/foodmatch`
    );
    setFoodRecommand(response.data);
    setFoodScript(foodRecommand?.foodscript1);
    setFoodWineList(foodRecommand?.wine_list1);

    console.log("푸드", foodScript);
    console.log("푸드와인", foodWineList);
  };

  const onHandler = () => {
    loadRecommandTag();
    loadRecommandFood();
  };
  useEffect(() => {}, []);
  return (
    <Box px={"16px"} py={"30px"} justifyContent="flex-start">
      <Button
        onClick={() => {
          onHandler();
        }}>
        go
      </Button>
      <Box mb={"20px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        와인 추천
      </Box>
      <Box>
        <Box mt={"20px"} mb={"40px"}>
          <Text fontSize="14px" color={"#F8F8F8"}>
            {tagScript}
          </Text>
          <Text fontSize="14px" color={"#F8F8F8"}>
            해시태그 기반 추천 와인입니다.
          </Text>
        </Box>
        {tagWineList.map(
          (tag: {
            wine_id: number;
            wine_picture: string;
            winery: string;
            kname: string;
            winetype: string;
          }) => (
            <RecommandListBox
              wine_id={tag.wine_id}
              wine_picture={tag.wine_picture}
              winery={tag.winery}
              kname={tag.kname}
              winetype={tag.winetype}
            />
          )
        )}
      </Box>
      <Box mb={"20px"}>
        <Text as="b" fontSize="14px" color={"#F8F8F8"}>
          기분 따라 안주 따라 와인 따라
        </Text>
      </Box>
      <VStack gap={"10px"}></VStack>
    </Box>
  );
}
