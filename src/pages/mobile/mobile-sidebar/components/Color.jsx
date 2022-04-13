import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Color = () => {
  const [showColor, setShowColor] = useState(false);

  return (
    <section className="flex justify-between py-5 border-b">
      <h2 className="mx-5 text-xl">رنگ</h2>
      {!showColor ? (
        <BsChevronUp className="mx-5 text-xl" />
      ) : (
        <BsChevronDown className="mx-5 text-xl" />
      )}
    </section>
  );
};

export default Color;
