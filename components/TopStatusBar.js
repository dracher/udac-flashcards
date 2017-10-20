import React from "react";
import { Constants } from "expo";

export default function TopStatusBar({ bgColor, ...props }) {
  return (
    <View style={{ bgColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={bgColor} {...props} />
    </View>
  );
}
