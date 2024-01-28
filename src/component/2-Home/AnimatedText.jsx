import React, { useState, useEffect } from "react";
import "./Home.css"; // Se till att ändra detta länk beroende på platsen för din stilfil

const AnimatedText = (props) => {
  const [text, setText] = useState("");
  const fullText = props.text; // Texten du vill visa

  useEffect(() => {
    setInterval(() => {
      setText((prevText) => {
        const nextChar = fullText.charAt(prevText.length);
        return prevText + nextChar;
      });
    }, 100);
  }, [fullText]);

  return <h1 className="title-hero">{text}</h1>; // Välj klassen som kommer att användas för att tillämpa dina stilar
};

export default AnimatedText;
