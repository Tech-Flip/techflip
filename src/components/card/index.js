import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image } from "react-native";
import back from "../../../public/img/back.png";
import css from "../../../public/img/css.png";
import fullstack from "../../../public/img/fullstack.png";
import js from "../../../public/img/js.png";
import node from "../../../public/img/node.png";
import postman from "../../../public/img/postman.png";
import redux from "../../../public/img/redux.png";
import sql from "../../../public/img/sql.png";
import react from "../../../public/img/react.png";

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

export default function Card({
  handleClick,
  id,
  type,
  flipped,
  height,
  width,
  solved,
  disabled,
}) {
  return (
    <View
      style={styles.flipContainer}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <View style={flipped ? styles.flipContainerFlipped : styles.flipper}>
        <Image
          style={flipped ? styles.front : styles.back}
          source={flipped || solved ? front[type] : back}
        />
      </View>
    </View>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  flipContainer: {
    display: "flex",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#0000",
    width: "100px",
    height: "100px",
  },

  flipContainerFlipped: {
    transform: [{ rotateY: "180deg" }],
  },

  flipper: {
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  },

  back: {
    zIndex: 2,
    width: "100px",
    height: "100px",
    transform: [{ rotateY: "0deg" }],
    backfaceVisibility: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },

  front: {
    width: "100px",
    height: "100px",
    transform: [{ rotateY: "180deg" }],
    backfaceVisibility: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
});
