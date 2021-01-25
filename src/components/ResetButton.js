import React, { useEffect, useState } from "react";
import { View, Button, Text, Alert } from "react-native";

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
      <Button onPress={playAgain} title="Reset Board" />
    </View>
  );
};

export default ResetButton;
