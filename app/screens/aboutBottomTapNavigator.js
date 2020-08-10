//npm install @react-navigation/bottom-tabs

import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/screens/Screen";

// PASSING A PARAMETER {id: 1}

// This is the main page

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

// const Stack = createStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator initialRouteName="Tweets">
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={{ headerStyle: { backgroundColor: "tomato" } }}
//     />
//     <Stack.Screen
//       name="Tweets"
//       component={Tweets}
//       options={{ title: "Tweet Details one two " }}
//     />
//   </Stack.Navigator>
// );

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

// USING TAB NAVIGATOR

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "gold",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons size={size} color={color} name="home" />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}
