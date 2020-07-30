import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

//this function import in aboutAskPermissionsUser
function AboutImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {/* If we set an icon for the upload photo we should past through imageUri if not (!imageUri) is going to be by default name="camera" */}
      {!imageUri && (
        <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />
      )}
      {/* If image exist render image */}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: "center",
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
    // We need to put overflow property in the container due to when we upload the photo our container that has round corners lost it
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AboutImageInput;
