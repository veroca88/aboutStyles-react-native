import React from "react";
import { Text, StyleSheet } from "react-native";

function IosPlatform({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#4F4E57",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default IosPlatform;
