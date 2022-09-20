import React from "react";
import { Text, TouchableWithoutFeedback, View, Image } from "react-native";
import { useTailwind } from "tailwind-rn";
import { shadow } from "./../../utils/style";

const ServingsItem = ({ item, onPress }) => {
  const tailwind = useTailwind();

  return (
    <TouchableWithoutFeedback key={item.id} onPress={onPress}>
      <View style={[tailwind("w-20 bg-white h-20 items-center self-center justify-center mx-2 rounded-2xl"), shadow]}>
        <Text style={tailwind("font-medium text-base text-cbprimary-800")} key={item}>
          {item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ServingsItem;
