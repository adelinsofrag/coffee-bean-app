import React from "react";
import { View, Text } from "react-native";
import { mockData } from "../utils/mock";

const MockComponent = () => {
  return (
    <View>
      <Text>Mock Component</Text>
      <Text>{mockData.mock}</Text>
    </View>
  );
};

export default MockComponent;
