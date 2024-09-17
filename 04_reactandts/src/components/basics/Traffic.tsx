"use client";
import { useState } from "react";

export default function Traffic() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "stop is next" : "walk is next");
  }

  return (
    <div className="p-2 flex justify-center items-center rounded-lg gap-6 border border-black flex-col text-black">
      <button
        className="p-1 text-lg bg-black rounded-lg text-white"
        onClick={handleClick}
      >
        Change to {walk ? "Stop" : "Walk"}
      </button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </div>
  );
}
