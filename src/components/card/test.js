import React, { useRef, useState } from "react";
import { View, StyleSheet, Animated, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-paper";
import FlipCard from "../components/FlipCard";

const Word = () => {
  const animate = useRef(new Animated.Value(0));
  const frontRef = useRef({});
  const backRef = useRef({});

  const doAFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: flipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      if (flipped) {
        frontRef.current.focus();
      } else {
        backRef.current.focus();
      }
      flipped = !flipped;
    });
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
    <View
      onPress={doAFlip}
      style={styles.flipContainer}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <Animated.View style={[styles.front, rotateFront]}>
        <FlipCard title="Front" inputRef={frontRef} autoFocus={true} />
      </Animated.View>
      <Animated.View style={[styles.back, rotateBack]}>
        <FlipCard title="Back" inputRef={backRef} />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hidden: {
    backfaceVisibility: "hidden",
  },
  card: {
    width: 200,
    height: 200,
  },
  back: {
    position: "absolute",
    top: 0,
  },
  cardItem: {
    width: "100%",
    height: "100%",
  },
  textInput: {
    fontSize: 18,
  },
});
