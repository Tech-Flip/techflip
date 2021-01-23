
import React, { useRef, useState } from "react";
import { View, StyleSheet, Animated, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-paper";
import FlipCard from "../components/FlipCard";

const Word = () => {
  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const frontRef = useRef();
  const backRef = useRef();
  const doAFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      if (isFlipped) {
        frontRef.current.focus();
      } else {
        backRef.current.focus();
      }
      setIsFlipped(!isFlipped);
    });
  };
  const interpolatedValueFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const interpolatedValueBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
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
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
        <Animated.View style={[styles.hidden, rotateFront]}>
          <FlipCard
            title="Front"
            inputRef={frontRef}
            onChange={(value) => setFront(value)}
            value={front}
            autoFocus={true}
          />
        </Animated.View>
        <Animated.View style={[styles.hidden, styles.back, rotateBack]}>
          <FlipCard
            title="Back"
            inputRef={backRef}
            onChange={(value) => setBack(value)}
            value={back}
          />
        </Animated.View>
        <Button onPress={doAFlip}>Flip</Button>
      </View>
    </KeyboardAvoidingView>
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
