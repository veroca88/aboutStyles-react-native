import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

function aboutPlatform({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

// Example of wrong way to write code
// const styles = StyleSheet.create({
//   text: {
//     fontSize: Platform.OS === "android" ? 18 : 20,
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//   },
// });

const styles = StyleSheet.create({
  text: {
    // color of both platforms
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default aboutPlatform;
