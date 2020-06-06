import React from "react";

import { View, Text } from "react-native";

function aboutText(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "#CCFF00",
          textTransform: "capitalize",
          //   textDecorationLine: "line-through",
          textAlign: "justify",
          lineHeight: 40,
        }}
      >
        I love react native !! This is my first Native app! Here's some more
        text...
      </Text>
    </View>
  );
}

export default aboutText;
