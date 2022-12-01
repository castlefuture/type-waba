import {
  Box,
  Button,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

interface CellarModalProps {
  isOpen: boolean;
  onClose: () => void;
  wine_id?: number;
}

export default function CellarModal({
  isOpen,
  onClose,
  wine_id,
}: CellarModalProps) {
  const [date, setDate] = useState("");
  const [assessment, setAssessment] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  console.log(date, assessment, tagList);
  const addHashtag = () => {
    setTagList([...tagList, hashtag]);
    setHashtag("");
  };

  const resetHashtag = () => {
    setTagList([]);
  };
  const onChangeHandler = (text: string) => {
    setHashtag(text);
  };

  const sendCellar = () => {
    axios.post(`http://3.38.2.131:8000/api/v1/winesearch/${wine_id}/addWine`, {
      // wine_id: wine_id,
      assessment: assessment,
      date: date,
      hashtag: hashtag,
    });
  };

  return (
    <Modal motionPreset="scale" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="whiteAlpha.300"
        backdropFilter="blur(2px) hue-rotate(90deg)"
      />
      <ModalContent width={"359px"}>
        <ModalHeader bg={"#333333"} color={"#F8F8F8"} borderBottomWidth={1}>
          셀러 등록
        </ModalHeader>
        <ModalBody py={"30px"} bg={"#333333"}>
          <VStack>
            <Box>
              <Text fontSize={"16px"} color={"#FAF4E1"}>
                날짜
              </Text>
              <Input
                width={"310px"}
                height={"41px"}
                fontSize={"16px"}
                bg={"#FAF4E1"}
                color={"#333333"}
                type="text"
                rounded={"8px"}
                px={"10px"}
                variant={"unstyled"}
                placeholder="YYYY-MM-DD"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </Box>
            <Box>
              <Text fontSize={"16px"} color={"#FAF4E1"}>
                만족도
              </Text>
              <Select
                width={"310px"}
                height={"41px"}
                fontSize={"16px"}
                bg={"#FAF4E1"}
                color={"#333333"}
                rounded={"8px"}
                variant={"unstyled"}
                placeholder=" 만족도"
                value={assessment}
                onChange={(event) => setAssessment(event.target.value)}>
                <option value="좋음">좋음</option>
                <option value="보통">보통</option>
                <option value="나쁨">나쁨</option>
              </Select>
            </Box>
            <Box mb={"12px"}>
              <Text fontSize={"16px"} color={"#FAF4E1"}>
                해시태그
              </Text>
              <Grid
                mb={"10px"}
                gap={"15px"}
                width={"310px"}
                templateColumns={"3fr 1fr"}>
                <Input
                  height={"41px"}
                  fontSize={"16px"}
                  bg={"#FAF4E1"}
                  color={"#333333"}
                  type="text"
                  rounded={"8px"}
                  px={"10px"}
                  variant={"unstyled"}
                  placeholder="해시태그를 입력해주세요."
                  value={hashtag}
                  onChange={(event) => onChangeHandler(event.target.value)}
                />
                <Button bg={"#2C4934"} color={"#FAF4E1"} onClick={addHashtag}>
                  추가
                </Button>
              </Grid>

              <Box>
                {tagList.map((item) => (
                  <Tag
                    colorScheme={"yellow"}
                    marginRight={"5px"}
                    size="sm"
                    key="sm"
                    borderRadius="4px"
                    variant="outline">
                    <TagLabel>#{item}</TagLabel>
                  </Tag>
                ))}
              </Box>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter bg={"#333333"}>
          <Button
            marginRight={"20px"}
            width={"128px"}
            height={"41px"}
            fontSize={"16px"}
            bg={"#D1654E"}
            color={"#FAF4E1"}
            onClick={resetHashtag}>
            태그 초기화
          </Button>
          <Button
            width={"80px"}
            height={"41px"}
            fontSize={"16px"}
            bg={"#D1654E"}
            color={"#FAF4E1"}
            onClick={() => {
              sendCellar();
            }}>
            등록
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
