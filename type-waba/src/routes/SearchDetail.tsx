import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { getCookie } from "../cookie";

export default function SearchDetail() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  const addTag = () => {
    setTagList([...tagList, tag]);
    console.log(tagList);
  };

  const resetTag = () => {
    setTagList([]);
  };
  const onChangeHandler = (text: string) => {
    setTag(text);
  };
  const [wineInfo, setWineInfo] = useState([]);
  const loadInfos = async () => {
    const response = await axios.get(
      `http://3.38.2.131:8000/api/v1/winesearch/detail/231`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getCookie("access")}`,
        },
      }
    );
    setWineInfo(response.data);
    console.log(wineInfo);
  };

  return (
    <VStack px={"16px"} py={"30px"} justifyContent="center">
      <Box mb={"20px"} w="100%" as="b" fontSize={"24px"} color={"#F8F8F8"}>
        검색 결과
      </Box>
      {/* <Button onClick={getWine}>검색</Button> */}
      <Grid gap={"20px"} templateColumns={"131px 207px"}>
        <Flex
          width={"131px"}
          height={"291px"}
          bg={"#ffffff"}
          position="relative"
          overflow={"hidden"}
          rounded={"8px"}>
          <Image src="https://wine21.speedgabia.com/WINE_MST/TITLE/0172000/W0172231.png" />
        </Flex>
        <Box>
          <Button
            width={"56px"}
            height={"19px"}
            fontSize={"10px"}
            rounded={"4px"}
            bg={"#EB5E27"}
            color={"#FAF4E1"}>
            레드와인
          </Button>
          <Text as="b" noOfLines={2} fontSize={"14px"} color={"#F8F8F8"}>
            휴잇슨, 모노폴 마더바인 쉬라즈 블랑 드 샴팡
          </Text>
          <Text noOfLines={1} fontSize={"10px"} color={"#F8F8F8"}>
            Hewitson, Mother Vine Shiraz
          </Text>
          <VStack alignItems="flex-start" mt={5} spacing={"2px"}>
            <Text fontSize={"12px"} color={"#F8F8F8"}>
              양조장 : 몬테스
            </Text>
            <Text fontSize={"12px"} color={"#F8F8F8"}>
              국가 : 칠레
            </Text>
            <Text fontSize={"12px"} color={"#F8F8F8"}>
              생산지역 : 콜차구아 밸리
            </Text>
          </VStack>
          <Box mt={3} px={3} py={3} rounded={"xl"} bg={"#2C4934"}>
            <Grid templateColumns={"1fr 2fr 1.2fr"}>
              <VStack alignItems="flex-start">
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  당도
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  산미
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  바디감
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  타닌감
                </Text>
              </VStack>
              <VStack>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
                <Grid gap={"6px"} templateColumns={"repeat(5, 1fr)"}>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                  <Text fontSize={"12px"} color={"#F8F8F8"}>
                    O
                  </Text>
                </Grid>
              </VStack>
              <VStack alignItems="flex-end">
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  아주높음
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  약간높음
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  아주약함
                </Text>
                <Text fontSize={"12px"} color={"#F8F8F8"}>
                  약함
                </Text>
              </VStack>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <VStack width={"100%"} alignItems="flex-start" spacing={5}>
        <Box>
          <Text as="b" fontSize="md" color={"#F8F8F8"}>
            포도품종
          </Text>
          <Text fontSize="sm" color={"#F8F8F8"}>
            카르메네르, 카르베 소비뇽
          </Text>
        </Box>
        <Box>
          <Text as="b" fontSize="md" color={"#F8F8F8"}>
            노트
          </Text>
          <Text fontSize="sm" color={"#F8F8F8"}>
            체리, 기죽
          </Text>
        </Box>
        <Box>
          <Text as="b" fontSize="md" color={"#F8F8F8"}>
            추천 음식
          </Text>
          <Text fontSize="sm" color={"#F8F8F8"}>
            치즈, 고기
          </Text>
        </Box>
      </VStack>
      <Button
        width={"169px"}
        height={"45px"}
        fontSize={"20px"}
        bg={"#D1654E"}
        color={"#FAF4E1"}
        onClick={onOpen}>
        셀러에 담기
      </Button>
      <Modal motionPreset="scale" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="whiteAlpha.300"
          backdropFilter="blur(2px) hue-rotate(90deg)"
        />
        <ModalContent width={"359px"}>
          <ModalHeader bg={"#333333"} color={"#F8F8F8"}>
            셀러 등록
          </ModalHeader>
          <ModalBody bg={"#333333"}>
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
                />
              </Box>
              <Box>
                <Text fontSize={"16px"} color={"#FAF4E1"}>
                  만족도
                </Text>

                <Grid
                  width={"310px"}
                  gap={"20px"}
                  templateColumns={"1fr 1fr 1fr"}>
                  <Button
                    height={"45px"}
                    fontSize={"20px"}
                    bg={"#FAF4E1"}
                    color={"#333333"}>
                    나쁨
                  </Button>
                  <Button
                    height={"45px"}
                    fontSize={"20px"}
                    bg={"#FAF4E1"}
                    color={"#333333"}>
                    보통
                  </Button>
                  <Button
                    height={"45px"}
                    fontSize={"20px"}
                    bg={"#FAF4E1"}
                    color={"#333333"}>
                    좋음
                  </Button>
                </Grid>
              </Box>
              <Box mb={"12px"}>
                <Text fontSize={"16px"} color={"#FAF4E1"}>
                  해시태그
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
                  placeholder="해시태그를 입력해주세요."
                  value={tag}
                  onChange={(event) => onChangeHandler(event.target.value)}
                />
                <Button onClick={addTag}>추가</Button>
                <Button onClick={resetTag}>태그 초기화</Button>

                <HStack spacing={4}>
                  {tagList.map((item) => (
                    <Tag
                      size="sm"
                      key="sm"
                      borderRadius="4px"
                      variant="solid"
                      colorScheme="green">
                      <TagLabel>#{item}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter bg={"#333333"}>
            <Button
              width={"80px"}
              height={"45px"}
              fontSize={"20px"}
              bg={"#D1654E"}
              color={"#FAF4E1"}>
              등록
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
