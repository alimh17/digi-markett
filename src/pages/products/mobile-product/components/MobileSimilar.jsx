import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { mobile } from "../../../../data/mobile";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoadingAction } from "../../../../actions/loadingAction";

const MobileSimilar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <SplideSlide
            key={item.id}
            className=" "
            onClick={() => {
              dispatch(showLoadingAction());
              setTimeout(() => {
                navigate(`/mobiles/${item.id}`);
              }, 1800);
            }}
          >
            <img alt="" src={item.url} />
            <h3 className="text-lg p-8 md:text-xs ">{item.title}</h3>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default MobileSimilar;
