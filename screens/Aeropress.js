import React from "react";
import Base from "../components/Base";
import icons from "../constants/icons";

/**
 * @name Aeropress
 * 
 * Behaves like a wrapper on top of Base.js
 * - adds props related to this method
 * 
 */
const Aeropress = () => {
  const props = {
    groundCoffee: 16,
    imageSRC: icons.Aeropress,
    method: "aeropress",
    placeholder: { label: "Recommended 1:12", value: "12" },
    ratio: 10,
  };

  return <Base {...props} />;
};

export default Aeropress;
