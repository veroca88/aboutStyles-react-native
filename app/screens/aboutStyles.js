import React from "react";

import { StyleSheet, Text, View } from "react-native";

function aboutStyles(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* CIRCLES */}
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderRadius: 10,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />

      <View
        style={{
          backgroundColor: "#FF9999",
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 20,
          borderColor: "#EA3556",
        }}
      />

      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          borderRadius: 10,
          borderTopLeftRadius: 50,
        }}
      />
    </View>
  );
}

export default aboutStyles;
