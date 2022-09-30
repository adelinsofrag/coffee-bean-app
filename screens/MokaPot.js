import React from "react";
import Base from "../components/Base";
import icons from "../constants/icons";

/**
 * @name MokaPot
 * 
 * Behaves like a wrapper on top of Base.js
 * - adds props related to this method
 * 
 */
const MokaPot = () => {
  const props = {
    groundCoffee: 16,
    imageSRC: icons.MokaPot,
    method: "moka",
    placeholder: { label: "Recommended 1:6", value: "6" },
    ratio: 6,
  };

  return <Base {...props} />;
};

export default MokaPot;
