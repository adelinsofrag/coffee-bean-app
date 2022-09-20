import React from "react";
import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn";
import icons from "../constants/icons";

const Social = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex items-center justify-center h-auto")}>
      <Image source={icons.Default} style={tailwind("w-10 h-10 self-center")} />
      <View style={tailwind("h-auto mt-2 items-center")}>
        <Text style={tailwind("font-medium text-cbprimary-800 text-sm tracking-wide")}>CoffeeBean App</Text>
      </View>
    </View>
  );
};

export default Social;
