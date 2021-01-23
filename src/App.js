import React, { useState, useEffect } from "react";
import Board from "./components/board";
import initializeDeck from "./deck";
import { View, Text } from "react-native";
import sql from "../public/img/sql.png";
import css from "../public/img/css.png";
import fullstack from "../public/img/fullstack.png";
import js from "../public/img/js.png";
import node from "../public/img/node.png";
import postman from "../public/img/postman.png";
import redux from "../public/img/redux.png";
import react from "../public/img/react.png";

const front = {
  css,
  fullstack,
  js,
  node,
  postman,
  redux,
  sql,
  react,
};

export default function App() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    preloadImages();
  });

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) {
        setDisabled(false);
        return;
      }
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
    }
  };

  const preloadImages = () => {
    cards.map((card) => {
      const src = front[card.type];
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    const clickedCard = cards.find((card) => card.id === id);
    return flippedCard.type === clickedCard.type;
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Text>Can You Remember Where The Cards Are?</Text>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </View>
  );
}
