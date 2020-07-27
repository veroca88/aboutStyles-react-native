import React, { useEffect, useState } from "react";
import { StyleSheet, Button } from "react-native";
import Screen from "./Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

function aboutAskPermissionUser(props) {
const [imageUri, setImageUri] = useState()

  const requestPermission = async () => {
    const result = await Permission.askAsync(Permission.CAMERA_ROLL, Permission.LOCATION)
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async() => {
      try {
          const result = await ImagePicker.launchImageLibraryAsync()
          if(!result.cancelled)
      } catch (error) {
          console.log('Error reading an image')
          
      }
  }

  return <Screen>
      {/* Accessing the library */}
      <Button title="Select Image" onPress={selectImage}></Button>
  </Screen>;
}

const styles = StyleSheet.create({
  container: {},
});

export default aboutAskPermissionUser;
