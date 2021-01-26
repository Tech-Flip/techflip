import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
const Start = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.views}>
        <Text style={{ fontSize: 27 }}>Welcome to Tech Flip</Text>
      </View>

      <View style={styles.views}>
        <Image
          source={{
            uri:
              "https://www.hotelappz.com/wp-content/uploads/2019/01/Hotel-Tech-Stack-Integration-400x294.png",
          }}
          style={styles.image}
        />
      </View>

      <View style={[styles.views, { display: "flex", flexDirection: "row" }]}>
        <Text style={{ fontSize: 18 }}>Press </Text>
        <Text style={styles.startText}>START GAME</Text>
        <Text style={{ fontSize: 18 }}> to begin</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.appButtonText}> Start Game </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    textAlign: "center",
    fontFamily: "Bradley Hand",
    display: "flex",
    alignItems: "center",
    alignContent: "space-between",
    backgroundColor: "honeydew",
    height: "100%",
    width: "100%",
  },
  views: {
    // display: "flex",
    // alignItems: "center",
    margin: 10,
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "mediumseagreen",
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
  startText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  image: {
    borderColor: "silver",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#0000",
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});

export default Start;
