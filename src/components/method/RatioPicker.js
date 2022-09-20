import React, { forwardRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTailwind } from "tailwind-rn";
import { ratioProvider } from "./../../utils/data";
import { shadow } from "./../../utils/style";

const RatioPicker = forwardRef((props, ref) => {
  const tailwind = useTailwind();

  return (
    <View style={[tailwind("bg-white justify-around p-4 rounded-2xl"), shadow]}>
      <View style={tailwind("flex-row justify-between")}>
        <Text style={tailwind("font-medium text-xl text-cbprimary-800")}>Ratio</Text>
        <RNPickerSelect
          ref={ref}
          onValueChange={(value) => {
            props.setRatio(value);
            props.setWater((props.groundCoffee * value).toFixed(0));
          }}
          style={style}
          placeholder={props.placeholder}
          items={ratioProvider(props.method)}
        />
      </View>
    </View>
  );
});

export default RatioPicker;

const style = StyleSheet.create({
  inputIOS: {
    alignSelf: "center",
    paddingTop: 5, //dirty fix
    fontSize: 16,
    letterSpacing: -0.5,
    fontWeight: "500",
    color: "rgb(12,74,110)",
  },
  inputAndroid: {
    alignSelf: "center",
    paddingTop: 5, //dirty fix
    fontSize: 16,
    letterSpacing: -0.5,
    fontWeight: "500",
    color: "rgb(12,74,110)",
  },
});
