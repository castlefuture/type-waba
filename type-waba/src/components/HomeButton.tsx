import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IHomeButtonProps {
  link: string;
  name: string;
}

export default function HomeButton({ link, name }: IHomeButtonProps) {
  return (
    <Link to={`/${link}`}>
      <Button
        mb={"4px"}
        width={"169px"}
        height={"55px"}
        fontSize={"20px"}
        bg={"#2C4934"}
        color={"#FAF4E1"}
        w="100%">
        {`${name}`}
      </Button>
    </Link>
  );
}
