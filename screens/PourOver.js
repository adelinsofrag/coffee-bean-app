import React from "react";
import Base from "../components/Base";

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
    imageSRC: require("./../assets/icons/dripper.png"),
    method: "pourover",
    ratio: 12,
  };

  return <Base {...props} />;
};

export default PourOver;
