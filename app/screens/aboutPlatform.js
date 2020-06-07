import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

function aboutPlatform({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

// Example of wrong way to write StyleSheet code
// const styles = StyleSheet.create({
//   text: {
//     fontSize: Platform.OS === "android" ? 18 : 20,
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//   },
// });

// Good example to Keep It Simple K.I.S.
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
