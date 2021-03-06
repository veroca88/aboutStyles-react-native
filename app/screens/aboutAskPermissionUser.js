//This is app.js " "

import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Image } from "react-native";
import Screen from "./Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import AboutImageInput from "./aboutImageInput";

function aboutAskPermissionUser(props) {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    // const result = await Permission.askAsync(
    //   Permission.CAMERA_ROLL,
    //   Permission.LOCATION
    // );
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };
  //WE MOVE THIS FUNTION requestPermision TO aboutImageInput to do that function reusable

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  return (
    <Screen>
      {/* Accessing the library */}
      {/* <Button title="Select Image" onPress={selectImage}></Button>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      <AboutImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}

export default aboutAskPermissionUser;
