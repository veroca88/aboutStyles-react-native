import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    //Views as a container. This view is the parent
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", //horizontal
        justifyContent: "center", //mail
        alignItems: "center", // secondary axis
        // alignContent: "flex-start",
        // flexWrap: "wrap",
      }}
    >
      {/* All this View below are children */}
      <View
        style={{
          backgroundColor: "blue",
          // flexShrink: 1,
          width: 200,
          height: 100,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          // flex: 2,
          width: 100,
          height: 200,
          // flexGrow: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          // flex: 1,
          width: 100,
          top: 50,
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: "gray",
          // flex: 1,
          width: 100,
          height: 300,
        }}
      />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}
