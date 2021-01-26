import React, { useEffect, useState } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet } from "react-native";

const ResetButton = ({ numSolved, numCards, setPlayable, playAgain }) => {
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
