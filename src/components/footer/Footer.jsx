import React from "react";
import Form from "./components/Form";
import Social from "./components/Social";
import Support from "./components/Support";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <Support />
      <Social />
      <Form />
      <span className="w-full text-center">
        تمامی مطالب بر گرفته از سایت دیجی کالا میباشد و هیچ گونه هدف تجاری وجود
        ندارد
      </span>
    </div>
  );
};

export default Footer;
