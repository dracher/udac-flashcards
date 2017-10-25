import React from "react";
import { View, StatusBar } from 'react-native';
import { Constants } from "expo";

export default function TopStatusBar({ bgColor, ...props }) {
  return (
    <View style={{ bgColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={bgColor} {...props} />
    </View>
  );
}
