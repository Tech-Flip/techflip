import React, { useEffect } from "react";
import { View, Button, Text } from "react-native";
import Modal from "react-native-modal";

const Popup = ({ numSolved, numCards, setPlayable, playAgain }) => {
  let playable = true;
  if (numSolved === numCards) {
    playable = false;
  }
  useEffect(() => setPlayable(playable));

  return (
    <View>
      <Button onPress={playAgain} title="Reset Board" />
    </View>
  );
};

export default Popup;
