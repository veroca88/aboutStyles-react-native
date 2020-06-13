import React from "react";
import { TextInput, SafeAreaView, StyleSheet, Button } from "react-native";

import { Formik } from "formik";

function aboutForms(props) {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <TextInput
              style={styles.container}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="email"
              onChangeText={handleChange("email")}
            />
            <TextInput
              style={styles.container}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <Button
              style={styles.button}
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
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
