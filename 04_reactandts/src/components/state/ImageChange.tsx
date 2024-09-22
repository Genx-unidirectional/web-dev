"use client";
import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <div className="flex flex-col items-start text-black justify-center border gap-3 border-black rounded-lg w-[300px] h-[400px] p-2">
      <h3 className="text-center w-full">
        Image {index + 1} of {images.length}
      </h3>
      <picture className="h-2/3 w-full">
        {image.src !== undefined ? (
          <img
            key={image.src}
            className=" w-full h-full object-cover rounded-lg overflow-hidden top-0 left-0"
            src={image.src}
          />
        ) : (
          <p>Loading...</p>
        )}
      </picture>
      <p>{image.place}</p>
      <button
        className="text-white bg-black p-1 rounded-lg px-3"
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
}

let images = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
];
