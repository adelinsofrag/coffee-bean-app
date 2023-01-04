import React, { useRef, useState } from "react";
import { View, Image, SafeAreaView, TouchableWithoutFeedback, FlatList, Text } from "react-native";
import { servingsContent } from "./../constants/content";
import CoffeeInput from "./CoffeeInput";
import RatioPicker from "./RatioPicker";
import ServingsItem from "./ServingsItem";
import Social from "./Social";
import Values from "./Values";

/**
 * 
 * @param {*} props 
 * @name Base
 * 
 * Base component for every method screen
 * @example screens/Aeropress.js 

 * - has NativeWind
 * - defines default values
 * - contains all the base structure
 */
const Base = (props) => {
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
    <SafeAreaView className="bg-zinc-50 h-full">
      <View className="flex-1 h-auto justify-evenly px-8 py-6">
        <Image source={props.imageSRC} className="w-32 h-32 self-center my-2" />
        <Values {...valuesProps} />

        <View className="py-4">
          <Text className="font-medium text-cbprimary-800 text-center text-base my-2">Tap to change dose</Text>
          <TouchableWithoutFeedback key="coffee" onPress={handleCoffeeTouch}>
            <View className="w-full">
              <CoffeeInput {...coffeeProps} />
            </View>
          </TouchableWithoutFeedback>

          <View className="h-5" />

          <TouchableWithoutFeedback key="ratio" onPress={handleRatioTouch}>
            <View className="w-full">
              <RatioPicker {...ratioProps} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View className="py-4">
          <Text className="font-medium text-cbprimary-800 text-center text-base my-2">Select how many cups</Text>
          <FlatList
            className="py-2"
            data={servingsContent()}
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
