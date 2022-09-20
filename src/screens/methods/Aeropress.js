import React from "react";
import Base from "../../components/method/Base";

const Aeropress = () => {
  const props = {
    groundCoffee: 16,
    imageSRC: require("./../../../assets/aeropress-2.png"),
    method: "aeropress",
    placeholder: { label: "Recommended 1:12", value: "12" },
    ratio: 10,
  };

  return <Base {...props} />;
};

export default Aeropress;
