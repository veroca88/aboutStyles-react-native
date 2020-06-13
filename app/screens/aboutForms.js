import React, { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from "react-native";

function aboutForms(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.container}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.container}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        style={styles.button}
        title="Login"
        onPress={() => console.log(email, password)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    width: "100%",
    //We said width: 100% of his container but if we want to unfold across the screen we must to asign with to the container (father) as well.
    marginVertical: 30,
  },
  container: {
    backgroundColor: "gray",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    marginTop: 30,
    padding: 15,
    marginVertical: 10,
  },
});

export default aboutForms;
