import React from "react";
import { View } from "react-native";

function aboutPaddingMargin(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* PADDING */}
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 200,
          height: 200,
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
          }}
        />
      </View>
      {/* MARGIN */}
      <View
        style={{
          backgroundColor: "black",
          width: 100,
          height: 100,
          margin: 20,
        }}
      />
    </View>
  );
}

export default aboutPaddingMargin;
