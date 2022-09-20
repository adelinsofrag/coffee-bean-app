import React, { forwardRef } from "react";
import { View, Text, TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";
import { shadow } from "../../utils/style";

const CoffeeInput = forwardRef((props, ref) => {
  const tailwind = useTailwind();

  return (
    <View style={[tailwind("bg-white justify-around p-4 rounded-2xl"), shadow]}>
      <View style={tailwind("flex-row justify-between")}>
        <Text style={tailwind("font-medium text-xl text-cbprimary-800")}>Coffee</Text>
        <View style={tailwind("flex-row")}>
          <TextInput
            onChangeText={(value) => {
              value = value.toString().replace(",", ".");
              props.setGroundCoffee(value);
              props.setWater((value * props.ratio).toFixed(0));
            }}
            style={tailwind("flex self-start text-base font-medium text-cbprimary-800")}
            ref={ref}
            returnKeyType="done"
            placeholder={props.groundCoffee.toString()}
            placeholderTextColor={"rgb(12,74,110)"}
            clearTextOnFocus={true}
            numeric
            keyboardType={"number-pad"}
          />
          <Text style={tailwind("font-medium text-base self-end text-cbprimary-800")}>g</Text>
        </View>
      </View>
    </View>
  );
});

export default CoffeeInput;
