import React, { useEffect, useState } from "react";
import { BiLike, BiStar } from "react-icons/bi";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";
import { generateRandomNumber } from "../../../../utils/generateRandomNumber";

const MobileTitle = ({ item }) => {
  const [feedback, setFeedback] = useState(Number);

  useEffect(() => {
    setFeedback(replaceNumberToPersian(generateRandomNumber()));
  }, []);

  return (
    <div className="border-b">
      <div className="flex flex-col">
        <span className="px-2 text-xl m-3">{item.title}</span>
      </div>
      <span className="flex items-center mx-5">
        <BiStar className="text-yellow-500 mx-3" />
        {replaceNumberToPersian(item.rate)}
        <p className="text-gray-400 mx-3">({replaceNumberToPersian(1186)})</p>
      </span>
      <span className="flex items-center mx-5">
        <BiLike className="text-green-500 mx-3" />
        <p className="text-gray-400">
          {feedback} نفر از خریداران این کالا را پیشنهاد کرده اند
        </p>
      </span>
    </div>
  );
};

export default MobileTitle;
