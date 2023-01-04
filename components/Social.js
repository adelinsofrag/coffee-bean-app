import React from "react";
import { View, Image } from "react-native";
import icons from "../constants/icons";

const Social = () => {
  return (
    <View className="flex items-center justify-center h-auto">
      <Image source={icons.Logo} className="w-12 h-12 self-center" />
    </View>
  );
};

export default Social;
