import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import icons from "../constants/icons";

const ServingsItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback key={item.id} onPress={onPress}>
      <View className="w-20 bg-white h-20 items-center self-center justify-center mx-2 rounded-2xl shadow">
        <Image source={icons.Cup} className="w-10 h-10 self-center" />
        <Text className="font-medium text-base text-cbprimary-800" key={item}>
          x{item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ServingsItem;
