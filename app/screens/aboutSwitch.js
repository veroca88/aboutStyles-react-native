import React, { useState } from "react";
import { SafeAreaView, Switch } from "react-native";

function aboutSwitch(props) {
  const [isNew, setIsNew] = useState(false);
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </SafeAreaView>
  );
}

export default aboutSwitch;
