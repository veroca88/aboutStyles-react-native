import React from "react";

import { View } from "react-native";

function aboutShadows(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#77CCA4",
          elevation: 60,
        }}
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#BAE4E5",
          elevation: 30,
          position: "absolute",
          top: 20,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#2A8FBD",
          elevation: 10,
          position: "absolute",
          bottom: 20,
        }}
      />
    </View>
  );
}

export default aboutShadows;
