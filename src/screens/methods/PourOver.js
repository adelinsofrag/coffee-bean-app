import React from "react";
import Base from "../../components/method/Base";

const PourOver = () => {
  const props = {
    groundCoffee: 17,
    imageSRC: require("./../../../assets/dripper.png"),
    method: "pourover",
    ratio: 12,
  };

  return <Base {...props} />;
};

export default PourOver;
