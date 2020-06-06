import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Styles from "./app/screens/aboutStyles";
import Flex from "./app/screens/aboutFlexbox";
import Shadows from "./app/screens/aboutShadows";
import PaddingMargin from "./app/screens/aboutPaddingMargin";
import AboutText from "./app/screens/aboutText";
import AppText from "./app/screens/aboutEncapsulatingText";

export default function App() {
  // return <Styles />;
  // return <Flex />;
  // return <Shadows />;
  // return <PaddingMargin />;
  // return <AboutText />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I love love love React Native!</AppText>
    </View>
  );
}
