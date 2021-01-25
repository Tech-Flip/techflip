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
            width={100}
            height={100}
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
    margin: 20,
    padding: "100",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    width: 600,
    flex: "1 1 1",
    alignItems: "center",
    alignContent: "space-between",
  },
});
