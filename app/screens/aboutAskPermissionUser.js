import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Screen from "./Screen";
import * as ImagePicker from "expo-image-picker";

function aboutAskPermissionUser(props) {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}

const styles = StyleSheet.create({
  container: {},
});

export default aboutAskPermissionUser;
