import React, { forwardRef } from "react";
import { View, Text, TextInput } from "react-native";

const CoffeeInput = forwardRef((props, ref) => {
  return (
    <View className="bg-white justify-around p-4 rounded-2xl shadow">
      <View className="flex-row justify-between">
        <Text className="font-medium text-xl text-cbprimary-800">Coffee</Text>
        <View className="flex-row">
          <TextInput
            onChangeText={(value) => {
              value = value.toString().replace(",", ".");
              props.setGroundCoffee(value);
              props.setWater((value * props.ratio).toFixed(0));
            }}
            className="flex self-start text-base font-medium text-cbprimary-800"
            ref={ref}
            returnKeyType="done"
            placeholder={props.groundCoffee.toString()}
            placeholderTextColor={"rgb(12,74,110)"}
            clearTextOnFocus={true}
            numeric
            keyboardType={"number-pad"}
          />
          <Text className="font-medium text-base self-end text-cbprimary-800">g</Text>
        </View>
      </View>
    </View>
  );
});

export default CoffeeInput;
