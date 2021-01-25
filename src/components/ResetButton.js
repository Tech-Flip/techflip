import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ResetButton = ({ numSolved, numCards, setPlayable, playAgain }) => {
  let playable = true;
  const openAlert = () => {
    alert("You got em all! Click OK to reset Board");
  };

  if (numSolved === numCards && numSolved > 0) {
    playable = false;
    if (!playable) {
      openAlert();
    }
  }
  useEffect(() => setPlayable(playable));

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={playAgain}>
        <Text style={styles.appButtonText}> Reset Board </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "dimgrey",
    color: "white",
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

export default ResetButton;
