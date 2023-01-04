import React from "react";
import { View, Text, Image, Share, TouchableWithoutFeedback } from "react-native";
import icons from "../constants/icons";

const Values = ({ groundCoffee, ratio, water, doseMultiplier, method }) => {
  // Share button logic
  // TODO: handle leftover cases
  const handleShareTouch = async () => {
    try {
      const result = await Share.share({
        message: `Try this one:
        - Brewing Method: ${method} 
        - Coffee: ${groundCoffee * doseMultiplier}g
        - Water: ${water * doseMultiplier}ml
        - Ratio: 1:${ratio}
        - For: ${doseMultiplier} cup(s)`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleShareTouch}>
      <View className="flex-row justify-evenly items-center h-auto bg-white my-4 py-2 rounded-2xl shadow">
        <View className="flex h-auto justify-between items-center">
          <Image source={icons.Grinder} className="w-8 h-8 mb-1" />
          <Text className=" text-cbprimary-800 font-medium text-xl">{groundCoffee * doseMultiplier}g</Text>
        </View>
        <View className="flex h-auto justify-between items-center">
          <Image source={icons.Water} className="w-8 h-8 mb-1" />
          <Text className=" text-cbprimary-800 font-medium text-xl">{water * doseMultiplier}ml</Text>
        </View>
        <View className="flex h-auto justify-between items-center">
          <Image source={icons.Ratio} className="w-8 h-8 mb-1" />
          <Text className=" text-cbprimary-800 font-medium text-xl">1:{ratio}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Values;
