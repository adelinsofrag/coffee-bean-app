import React from "react";
import Base from "../components/Base";
import icons from "../constants/icons";

/**
 * @name FrenchPress
 * 
 * Behaves like a wrapper on top of Base.js
 * - adds props related to this method
 * 
 */
const FrenchPress = () => {
  const props = {
    groundCoffee: 16,
    imageSRC: icons.FrenchPress,
    method: "frenchpress",
    placeholder: { label: "Recommended 1:12", value: "12" },
    ratio: 10,
  };

  return <Base {...props} />;
};

export default FrenchPress;
