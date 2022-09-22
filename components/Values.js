import React from "react";
import { View, Text, Image, Share, TouchableWithoutFeedback } from "react-native";
import { useTailwind } from "tailwind-rn";
import icons from "../constants/icons";
import { shadow } from "./../constants/style";

const Values = ({ groundCoffee, ratio, water, doseMultiplier, method }) => {
  const tailwind = useTailwind();

  // Share button logic
  // TODO: handle leftover cases
  const handleShareTouch = async () => {
    try {
      const result = await Share.share({
        message: `
        Base: ${method} 
        Coffee: ${groundCoffee * doseMultiplier}g
        Water: ${water * doseMultiplier}ml
        Ratio: 1:${ratio}
        For: ${doseMultiplier} cup(s)`,
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
      <View style={[tailwind("flex-row justify-evenly items-center h-auto bg-white my-4 py-2 rounded-2xl"), shadow]}>
        <View style={tailwind("flex h-auto justify-between items-center")}>
          <Image source={icons.Grinder} style={tailwind("w-8 h-8 mb-1")} />
          <Text style={tailwind(" text-cbprimary-800 font-medium text-xl")}>{groundCoffee * doseMultiplier}g</Text>
        </View>
        <View style={tailwind("flex h-auto justify-between items-center")}>
          <Image source={icons.Water} style={tailwind("w-8 h-8 mb-1")} />
          <Text style={tailwind(" text-cbprimary-800 font-medium text-xl")}>{water * doseMultiplier}ml</Text>
        </View>
        <View style={tailwind("flex h-auto justify-between items-center")}>
          <Image source={icons.Ratio} style={tailwind("w-8 h-8 mb-1")} />
          <Text style={tailwind(" text-cbprimary-800 font-medium text-xl")}>1:{ratio}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Values;
