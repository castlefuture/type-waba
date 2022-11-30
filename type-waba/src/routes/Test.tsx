import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Test() {
  /*   const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadNames = async () => {
      const response = await axios.get("https://reqres.in/api/users");

      setNames(response.data.data);
    };
    loadNames();
  }, []);

  const onSuggestionHandler = (text: string) => {
    setNames(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text: string) => {
    setInputValue(text);
    console.log("input", inputValue);
  }; */

  return (
    <div className="container">
      {/*      <input
        type="text"
        className="col-md-12 input"
        style={{ marginTop: 10 }}
        onChange={(event) => onChangeHandler(event.target.value)}
        value={inputValue}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      />
      {suggestions &&
        suggestions.map((suggestions, i) => (
          <div
            key={i}
            className="suggestion col-md-12 justify-content-md-center"
            onClick={() => onSuggestionHandler(suggestions.email)}>
            {suggestions.email}
          </div>
        ))} */}
    </div>
  );
}
