import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Image } from "react-native";

const Start = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <h1>Welcome to Tech Flip</h1>

      <Image
        source={{
          uri:
            "https://www.hotelappz.com/wp-content/uploads/2019/01/Hotel-Tech-Stack-Integration-400x294.png",
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />

      <h3>
        Press <span style={{ color: "red" }}>START GAME</span> to begin flipping
        cards <br />
        until you find all the matches!
      </h3>

      <br />
      <Button
        color="red"
        title="Start Game"
        onPress={() => navigation.navigate("Game")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    textAlign: "center",
    fontFamily: "monospace",
    margin: 20,
    padding: "100",
    alignItems: "center",
    alignContent: "space-between",
  },
});

export default Start;
