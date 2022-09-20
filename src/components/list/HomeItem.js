import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn";

const HomeItem = ({ item, onPress }) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={tailwind("flex flex-row justify-between items-center my-4 px-8 py-2")}>
        <Image source={item.src || require("./../../../assets/icon.png")} style={tailwind("w-10 h-10")} />
        <View style={tailwind("flex flex-row justify-between items-center w-4/5")}>
          <Text style={tailwind("text-cbprimary-800 text-2xl tracking-wider font-medium")}>{item.title}</Text>
          <AntDesign name="right" size={22} color="#49398d" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeItem;
