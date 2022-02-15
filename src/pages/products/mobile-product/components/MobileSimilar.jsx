import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { mobile } from "../../../../data/mobile";

const MobileSimilar = () => {
  return (
    <section>
      <h2 className="m-5 font-bold border-b border-red-500 w-20">
        کالاهای مشابه
      </h2>
      <Splide
        options={{
          perMove: 1,
          perPage: 6,
          autoplay: true,
          direction: "rtl",
          type: "loop",

          breakpoints: {
            1000: {
              perPage: 4,
            },

            820: {
              perPage: 2,
            },

            420: {
              perPage: 1,
            },
          },
        }}
      >
        {mobile.map((item) => (
          <SplideSlide key={item.id} className=" ">
            <img alt="" src={item.url} />
            <h3 className="text-lg p-8 md:text-base ">{item.title}</h3>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default MobileSimilar;
