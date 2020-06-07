import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Styles from "./app/screens/aboutStyles";
import Flex from "./app/screens/aboutFlexbox";
import Shadows from "./app/screens/aboutShadows";
import PaddingMargin from "./app/screens/aboutPaddingMargin";
import AboutText from "./app/screens/aboutText";
import AppText from "./app/screens/aboutEncapsulatingText";
import Icons from "./app/screens/aboutIcons";
import Platform from "./app/screens/aboutPlatform";
import OrganizeStyles from "./app/screens/OrganizeStyles-AppText/aboutOrganizeStyles";

// We dont need to import those (Ios & Android) below because React native automatically import
// the right implementation of the specific platform import we only need to import <AppText/>
// import Ios from "./app/screens/aboutPlatformByBehavior.ios";
// import Android from "./app/screens/aboutPlatformByBehavior.android";

export default function App() {
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
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrganizeStyles>Organize Styles!</OrganizeStyles>
    </View>
  );
}
