import React from "react";
import PropTypes from "prop-types";
import Card from "../card/index.js";
import { View, StyleSheet } from "react-native";

export default function Board({ cards, dimension, flipped, handleClick }) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 4.5}
          height={dimension / 4.5}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  dimension: PropTypes.number.isRequired,
};

// const styles = StyleSheet.create({
//   body: {
//     width: "100%",
//   },
//   board: {
//     marging: "0px",
//     padding: "0px",
//   },
// });
