// npm install @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// To use Stack navigator we need to install:
// npm install @react-navigation/stack

import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/screens/Screen";

//  Link is not a scrren is just a component so for access to { navigation } we need to use navigation hook
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

// PASSING A PARAMETER {id: 1}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Teewts"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
    {/* THIS BUTTON IS THE SAME OF THE LINK, to see button go to /aboutReactNavigation */}
  </Screen>
);

const TweetDetails = ({ route }) => (
  // if we are in the child component we cant use route as prop, we need to use hooks
  // useRoute()
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

// USING STACK

const Stack = createStackNavigator();

//  We should be aware if we created a route and passing params throughth
// in this case TweeetDetails in our STACKNAVIGATOR we can do a dinamic

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // options={{ title: "This is the title Tweet Details" }}
      //Title dinamically
      options={({ route }) => ({
        title: route.params.id,
      })}
    />
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{ title: "Tweet Details " }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
