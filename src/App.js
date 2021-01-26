import React, { useState, useEffect } from "react";
import Board from "./components/board";
import initializeDeck from "./deck";
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

  useEffect(() => {
    setSolved([]);
    setCards(initializeDeck(level));
  }, [level]);

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
        setTimeout(resetCards, 300);
      }
    }

    // const gameOverAlert = () => {
    //   if (solved.length === cards.length) {
    //     alert("You have won! Click to restart");
    //     setGameOver([...solved]);
    //     resetCards();
    //   }
    // };
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
    setCards(initializeDeck(level));
  };

  if (solved.length === cards.length && solved.length > 0) {
    alert("👏👏🏻👏🏼 YOU WON!! 👏🏽👏🏾👏🏿");
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "honeydew",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,
        }}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "mediumseagreen" }]}
          onPress={() => setLevel("easy")}
        >
          <Text style={styles.appButtonText}> Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "darkorange" }]}
          onPress={() => setLevel("medium")}
        >
          <Text style={styles.appButtonText}> Medium </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "crimson" }]}
          onPress={() => setLevel("hard")}
        >
          <Text style={styles.appButtonText}> Hard </Text>
        </TouchableOpacity>
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
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
