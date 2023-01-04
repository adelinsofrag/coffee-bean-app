import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import icons from "../constants/icons";
import { TEXT_COLOR } from "../constants/style";

const HomeItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex flex-row justify-between items-center my-4 px-8 py-2">
        <Image source={item.src || icons.Default} className="w-10 h-10" />
        <View className="flex flex-row justify-between items-center w-4/5">
          <Text className="text-cbprimary-800 text-2xl tracking-wider font-medium">{item.title}</Text>
          <AntDesign name="right" size={22} color={TEXT_COLOR} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeItem;
