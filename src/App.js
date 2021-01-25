import React, { useState, useEffect } from "react";
import Board from "./components/board";
import initializeDeck from "./deck";
import { Button, View, Text } from "react-native";
import sql from "../public/img/sql.png";
import css from "../public/img/css.png";
import fullstack from "../public/img/fullstack.png";
import js from "../public/img/js.png";
import node from "../public/img/node.png";
import postman from "../public/img/postman.png";
import redux from "../public/img/redux.png";
import react from "../public/img/react.png";
import ResetButton from "./components/ResetButton";

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
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [playable, setPlayable] = useState(true);
  const [level, setLevel] = useState("easy");
  // const [gameOver, setGameOver] = useState([]);

  console.log("cards flipped", flipped);
  console.log("this is the cards length", cards.length);
  console.log("this is the solved length", solved.length);
  console.log("this is the flipped length", flipped.length);

  useEffect(() => {
    setCards(initializeDeck(level));
    console.log("this is the level inside the useEffect", level);
    console.log(setCards(initializeDeck(level)));
  }, [level]);

  useEffect(() => {
    preloadImages();
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

  // const gameOverAlert = () => {
  //   if (solved.length === cards.length) {
  //     alert("You have won! Click to restart");
  //     setGameOver([...solved]);
  //     resetCards();
  //   }
  // };

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

  const playAgain = () => {
    setPlayable(true);
    setFlipped([]);
    setSolved([]);
    setCards(initializeDeck());
  };
  console.log("the current level is", level);
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Text style={{ alignText: "center", fontFamily: "monospace" }}>
        <span
          style={{
            fontWeight: "bold",
            color: "red",
            fontSize: 30,
          }}
        >
          Flip
        </span>
        &nbsp;
        <span style={{ fontWeight: "bold", color: "black", fontSize: 30 }}>
          Stacks
        </span>
        &nbsp; &nbsp;
        <span style={{ fontWeight: "bold", color: "red", fontSize: 30 }}>
          Create
        </span>
        &nbsp;
        <span style={{ fontWeight: "bold", color: "black", fontSize: 30 }}>
          Matches!
        </span>
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,
        }}
      >
        <Button
          color="green"
          title="easy"
          onPress={() => setLevel("easy")}
          testID="easy"
        />
        <Button
          color="orange"
          title="medium"
          onPress={() => setLevel("medium")}
        />
        <Button color="red" title="hard" onPress={() => setLevel("hard")} />
      </View>

      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        level={level}
        // gameOver={gameOver}
      />
      <ResetButton
        numSolved={flipped.length}
        numCards={cards.length}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </View>
  );
}
