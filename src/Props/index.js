import React from "react";
import Component from "./Component";

const Props = () => {
  // const name = "Perwez";
  let city ="Lucknow";
  return (
    <div className="flex flex-col gap-6">
      Name from Parent Component : {city}
      <Component city={city} />
    </div>
  );
};

export default Props;
