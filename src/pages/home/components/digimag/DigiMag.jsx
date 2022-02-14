import React from "react";
import { Link } from "react-router-dom";
import { digimag } from "../../../../data/digimag";

const DigiMag = () => {
  return (
    <section className="mx-5">
      <h3 className="text-2xl mr-5 text-gray-500">مطالب مرتبط</h3>
      <div className="flex flex-col md:flex-row w-full pt-10 ">
        {digimag.map((item) => (
          <div className="flex flex-col w-full md:w-1/4 md:mx-3" key={item.id}>
            <Link to={`digimeg/${item.id}`}>
              <img
                alt=""
                src={item.img}
                style={{ with: "100%", height: "20rem", borderRadius: "8px" }}
              />
              <p className="my-3 text-xl px-3">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigiMag;
