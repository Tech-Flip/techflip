import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image } from "react-native";
import "./styles.css";
// import "../../../public";

export default function Card({
  handleClick,
  id,
  type,
  flipped,
  height,
  width,
  solved,
}) {
  return (
    <div
      className={`flipContainer ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <Image
          style={{ height, width }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? `/img/${type}.png` : `/img/back.png`}
        />
      </div>
    </div>
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
    perspective: "1000px",
    display: "inline-block",
    border: "1px solid white",
    background: "#000000",
  },

  flipContainer_flipped_flipper: {
    transform: "rotateY(180deg)",
  },

  flipper: {
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  },

  front_back: {
    backfaceVisibility: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },

  back: {
    zIndex: 2,
    transform: "rotateY(0deg)",
  },

  front: {
    transform: "rotateY(180deg)",
  },
});
