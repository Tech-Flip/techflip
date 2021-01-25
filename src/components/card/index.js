import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Image,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import back from "../../../public/img/back.png";
import css from "../../../public/img/css.png";
import fullstack from "../../../public/img/fullstack.png";
import js from "../../../public/img/js.png";
import node from "../../../public/img/node.png";
import postman from "../../../public/img/postman.png";
import redux from "../../../public/img/redux.png";
import sql from "../../../public/img/sql.png";
import react from "../../../public/img/react.png";
import firebase from "../../../public/img/firebase.png";
import java from "../../../public/img/java.png";
import jquery from "../../../public/img/jquery.png";
import mongodb from "../../../public/img/mongodb.png";
import postgres from "../../../public/img/postgres.png";
import redis from "../../../public/img/redis.png";
import requirejs from "../../../public/img/requirejs.png";
import swift from "../../../public/img/swift.png";
import webpack from "../../../public/img/webpack.png";
import github from "../../../public/img/github.png";

const front = {
  css,
  fullstack,
  js,
  node,
  postman,
  redux,
  sql,
  react,
  firebase,
  java,
  jquery,
  mongodb,
  postgres,
  redis,
  requirejs,
  swift,
  webpack,
  github,
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
  const animate = useRef(new Animated.Value(0));
  const frontRef = useRef({});
  const backRef = useRef({});

  const onClick = () => {
    handleClick(id);

    console.log("Before:id,flip,sol", id, flipped, solved);
  };

  useEffect(() => {
    doAFlip();
  }, [flipped, solved]);

  const doAFlip = () => {
    console.log("After: id,flip,sol", id, flipped, solved);
    Animated.timing(animate.current, {
      duration: 300,
      toValue: 180,
      useNativeDriver: true,
    }).start(() => afterFlip());
  };

  const afterFlip = () => {
    if (!flipped) {
      Animated.timing(animate.current, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
    if (solved) {
      Animated.timing(animate.current, {
        duration: 300,
        toValue: 180,
        useNativeDriver: true,
      }).start();
    }
  };

  const interpolatedValueFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const interpolatedValueBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "0deg"],
  });

  const rotateFront = {
    transform: [
      {
        rotateY: interpolatedValueFront,
      },
    ],
  };
  const rotateBack = {
    transform: [
      {
        rotateY: interpolatedValueBack,
      },
    ],
  };
  return (
    <View style={styles.flipContainer}>
      <TouchableOpacity onPress={() => (disabled ? null : onClick())}>
        <Animated.View style={[styles.front, rotateFront]}>
          <Image title="Back" style={styles.front} source={back} />
        </Animated.View>
        <Animated.View style={[styles.back, rotateBack]}>
          <Image title="Front" style={styles.back} source={front[type]} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  // return (
  //   <View
  //     style={styles.flipContainer}
  //     onClick={() => (disabled ? null : handleClick(id))}
  //   >
  //     <View
  //       style={
  //         flipped
  //           ? [styles.flipContainerFlipped, styles.flipper]
  //           : styles.flipper
  //       }
  //     >
  //       <Image
  //         style={flipped ? styles.front : styles.back}
  //         source={flipped || solved ? front[type] : back}
  //       />
  //     </View>
  //   </View>
  // );
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
    transform: [{ perspective: 750 }],
    display: "flex",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#0000",
    width: 100,
    height: 100,
  },

  flipContainerFlipped: {
    // transform: [{ rotateY: "180deg" }],
  },

  flipper: {
    // transition: "0.6s",
    // transformStyle: "preserve-3d",
    position: "relative",
  },

  back: {
    zIndex: 2,
    width: 100,
    height: 100,
    // transform: [{ rotateY: "0deg" }],
    backfaceVisibility: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },

  front: {
    width: 100,
    height: 100,
    // transform: [{ rotateY: "180deg" }],
    backfaceVisibility: "hidden",
    // position: "absolute",
    left: 0,
    top: 0,
  },
});
