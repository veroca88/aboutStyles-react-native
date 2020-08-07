// import React from "react";
// import { Screen, StyleSheet, Text, View } from "react-native";
// import Styles from "./app/screens/aboutStyles";
// import Flex from "./app/screens/aboutFlexbox";
// import Shadows from "./app/screens/aboutShadows";
// import PaddingMargin from "./app/screens/aboutPaddingMargin";
// import AboutText from "./app/screens/aboutText";
// import AppText from "./app/screens/aboutEncapsulatingText";
// import Icons from "./app/screens/aboutIcons";
// import Platform from "./app/screens/aboutPlatform";
// import OrganizeStyles from "./app/screens/OrganizeStyles-AppText/aboutOrganizeStyles";
// import TextInput from "./app/screens/aboutTextInput";
// import Switch from "./app/screens/aboutSwitch";
// import Forms from "./app/screens/aboutForms";
// import FormikForms from "./app/screens/aboutFormikForms";
// import AskPermissionUser from "./app/screens/aboutAskPermissionUser";
// import ReactNavigation from "./app/screens/aboutReactNavigation";

// We dont need to import those (Ios & Android) below because React native automatically import
// the right implementation of the specific platform import we only need to import <AppText/>
// import Ios from "./app/screens/aboutPlatformByBehavior.ios";
// import Android from "./app/screens/aboutPlatformByBehavior.android";

// export default function App() {
// return <Styles />;
// return <Flex />;
// return <Shadows />;
// return <PaddingMargin />;
// return <AboutText />;

// return (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <AppText>I love love love React Native!</AppText>
//     <Platform>Very important this form to write code! K.I.S.</Platform>
//   </View>
// );

// return <Icons />;

//ORGANIZESTYLES-APPTEXT FOLDER
// return (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <OrganizeStyles>Organize Styles!</OrganizeStyles>
//   </View>
// );
// return <ReactNavigation />;
// }

// import React from "react";
// import { Text, Button } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";

// import Screen from "./app/screens/Screen";

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
//   );
// };

// const Tweets = () => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Link />
//   </Screen>
// );

// const TweetDetails = () => (
//   <Screen>
//     <Text>Tweet Details</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator initialRouteName="Tweets">
//     <Stack.Screen name="TweetDetails" component={TweetDetails} />
//     <Stack.Screen name="Tweets" component={Tweets} />
//   </Stack.Navigator>
// );

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }

//npm install @react-navigation/bottom-tabs

import React from "react";
import { Text, Button } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

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
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
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
