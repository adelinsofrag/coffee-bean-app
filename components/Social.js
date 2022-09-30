import React from "react";
import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn";
import icons from "../constants/icons";

const Social = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex items-center justify-center h-auto")}>
      <Image source={icons.Logo} style={tailwind("w-12 h-12 self-center")} />
    </View>
  );
};

export default Social;
