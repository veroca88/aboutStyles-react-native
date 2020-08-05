import React from "react";
import { View, StyleSheet } from "react-native";
import AboutImageInput from "./aboutImageInput";

function ImageInputList({ imagesUri = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imagesUri.map((uri) => (
        <AboutImageInput
          imageUri={uri}
          key={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}
      <AboutImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
