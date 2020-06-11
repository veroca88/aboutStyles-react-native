import React, { useState } from "react";
import { TextInput, Text } from "react-native";

function aboutTextInput(props) {
  //we give to our state a value empty string useState(''),
  //if we dont assign this value by default is going to be undefiend.
  //useState return an array so we can destructure below
  //the first element is our state variable
  //second element is a function to update the state
  const [firstName, setFirstName] = useState("");
  return (
    <>
      <Text>{firstName}</Text>
      <TextInput
        //   clearButtonMode="always" only works on IOS
        secureTextEntry //if true we can capture passwords
        maxLength={6}
        keyboardType="numeric"
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </>
  );
}

export default aboutTextInput;
