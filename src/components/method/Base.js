import React, { useRef, useState } from "react";
import { View, Image, SafeAreaView, TouchableWithoutFeedback, FlatList, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import CoffeeInput from "./CoffeeInput";
import Values from "./Values";
import RatioPicker from "./RatioPicker";
import { servings } from "./../../utils/data";
import ServingsItem from "./../list/ServingsItem";
import Social from "../Social";

const Base = (props) => {
  const tailwind = useTailwind();
  const placeholder = props.placeholder || { label: "Recommended 1:10", value: "10" };

  /* ---------- // Multiplier --------- */
  const initialDoseMultiplier = 1;
  const [doseMultiplier, setDoseMultiplier] = useState(initialDoseMultiplier);

  /* ------------ // Coffee ----------- */
  const initialGroundCoffee = props.groundCoffee;
  const [groundCoffee, setGroundCoffee] = useState(initialGroundCoffee);

  const coffeeRef = useRef(null);
  const handleCoffeeTouch = async () => coffeeRef.current.focus();

  /* ------------ // Ratio ------------ */
  const initialRatio = props.ratio;
  const [ratio, setRatio] = useState(initialRatio);

  const ratioRef = useRef(null);
  const handleRatioTouch = async () => ratioRef.current.togglePicker(true);

  /* ------------ // Water ------------ */
  const initialWater = groundCoffee * ratio;
  const [water, setWater] = useState(initialWater);

  /* ------------ // Props ----------- */
  const valuesProps = {
    doseMultiplier,
    groundCoffee,
    method: props.method,
    ratio,
    water,
  };

  const coffeeProps = {
    groundCoffee,
    ratio,
    ref: coffeeRef,
    setGroundCoffee,
    setWater,
  };

  const ratioProps = {
    groundCoffee,
    method: props.method,
    placeholder,
    ref: ratioRef,
    setRatio,
    setWater,
  };

  return (
    <SafeAreaView style={tailwind("bg-zinc-50 h-full")}>
      <View style={tailwind("flex-1 h-auto justify-evenly px-8 py-6")}>
        <Image source={props.imageSRC} style={tailwind("w-20 h-20 self-center my-2")} />
        <Values {...valuesProps} />

        <View style={tailwind("py-4")}>
          <Text style={tailwind("font-medium text-cbprimary-800 text-center text-base my-2")}>Tap to change dose</Text>
          <TouchableWithoutFeedback key="coffee" onPress={handleCoffeeTouch}>
            <View style={tailwind("w-full")}>
              <CoffeeInput {...coffeeProps} />
            </View>
          </TouchableWithoutFeedback>

          <View style={tailwind("h-5")} />

          <TouchableWithoutFeedback key="ratio" onPress={handleRatioTouch}>
            <View style={tailwind("w-full")}>
              <RatioPicker {...ratioProps} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={tailwind("py-4")}>
          <Text style={tailwind("font-medium text-cbprimary-800 text-center text-base my-2")}>Select how many cups</Text>
          <FlatList
            style={tailwind("py-2")}
            data={servings}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ServingsItem item={item} onPress={() => setDoseMultiplier(item.id)} />}
          />
        </View>
      </View>

      <Social />
    </SafeAreaView>
  );
};

export default Base;
