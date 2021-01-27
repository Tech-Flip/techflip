import React from "react";
import PropTypes from "prop-types";
import Card from "../card/index";
import { View, StyleSheet, Button } from "react-native";

export default function Board({
  solved,
  disabled,
  cards,
  flipped,
  handleClick,
  level,
  // navigation,
}) {
  return (
    <View>
      <View style={styles.body}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            type={card.type}
            flipped={flipped.includes(card.id)}
            handleClick={handleClick}
            solved={solved.includes(card.id)}
            disabled={disabled || solved.includes(card.id)}
          />
        ))}
      </View>
    </View>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  body: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    width: 500,
  },
});
