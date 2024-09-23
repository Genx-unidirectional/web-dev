"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";

const IMAGEARRAY = [
  "/images/hero2.jpg",
  "/images/invoices.jpg",
  "/images/dash_craft_hero.jpg",
  "/images/hero-page.jpg",
  "/images/simple.jpg",
  "/images/sensei.png",
];
function ImageCarousel() {
  const [selectedIndex, setIndex] = useState<number>(0);
  const imageNode = useRef<HTMLLIElement>(null);
  return (
    <div className="flex p-3 border rounded-lg border-black gap-4 flex-col justify-center items-center">
      <div className="w-full flex justify-center gap-3">
        <button
          onClick={() => {
            flushSync(() => {
              if (selectedIndex > IMAGEARRAY.length - 2) {
                return;
              } else {
                setIndex(selectedIndex + 1);
              }
            });
            imageNode.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }}
          className="text-white bg-black p-1 px-2 rounded-lg"
        >
          Down
        </button>
        <button
          onClick={() => {
            flushSync(() => {
              if (selectedIndex === 0) {
                return;
              } else {
                setIndex(selectedIndex - 1);
              }
            });
            imageNode.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }}
          className="text-white bg-black p-1 px-2 rounded-lg"
        >
          Up
        </button>
      </div>

      <ul className="w-[300px] h-[400px] overflow-hidden overflow-y-scroll">
        {IMAGEARRAY.map((item, idx) => {
          return (
            <li
              ref={idx === selectedIndex ? imageNode : null}
              key={`${item}a3`}
              className="h-full w-full"
            >
              <img
                className="w-full h-full object-cover"
                src={item}
                alt="image"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ImageCarousel;
