import React from "react";
import Base from "../components/Base";
import icons from "../constants/icons";

/**
 * @name PourOver
 * 
 * Behaves like a wrapper on top of Base.js
 * - adds props related to this method
 * 
 */
const PourOver = () => {
  const props = {
    groundCoffee: 17,
    imageSRC: icons.Dripper,
    method: "pourover",
    placeholder: { label: "Recommended 1:16", value: "16" },
    ratio: 16,
  };

  return <Base {...props} />;
};

export default PourOver;
