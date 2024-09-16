"use client";
import { useState } from "react";
import { sculptureList } from "../../../data/basics/appcrash";

export default function AppCrash() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index >= sculptureList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function handlePreviousClick() {
    if (index === 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div className="text-white sm:w-1/3 w-1/2 rounded-lg overflow-hidden bg-black flex items-start flex-col gap-2 ">
      <picture className="w-full h-1/2">
        <source src={sculpture.url} />
        <img
          className="w-full h-full object-cover"
          src={sculpture.url}
          alt={sculpture.alt}
        />
      </picture>
      <div className="p-2 flex flex-col items-start gap-1">
        <h2 className="text-xl mb-3 font-medium">
          <i className="text-yellow-200">{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
      <div className="flex justify-between p-2 w-full">
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handlePreviousClick}>Previous</button>
      </div>
    </div>
  );
}
