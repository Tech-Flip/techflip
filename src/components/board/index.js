import React from "react";
import PropTypes from "prop-types";
import Card from "../card/index";
import { View, StyleSheet } from "react-native";

export default function Board({
  solved,
  disabled,
  cards,
  dimension,
  flipped,
  handleClick,
}) {
  return (
    <View style={styles.body}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 4.5}
          height={dimension / 4.5}
          flipped={flipped.includes(card.id)}
          handleClick={handleClick}
          solved={solved.includes(card.id)}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </View>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  body: {
    margin: "20px",
    padding: "100",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    width: "25%",
    alignItems: "center",
    alignContent: "space-between",
    width: "450px",
  },
});
