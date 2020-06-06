import React from "react";

import { View } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

function aboutIcons(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={"email"} size={200} color={"#C0ADDB"} />
      <FontAwesome name={"user-secret"} size={150} color={"#F2F2F2"} />
    </View>
  );
}

export default aboutIcons;
