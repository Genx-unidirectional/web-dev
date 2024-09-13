"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex p-2 rounded-lg flex-col bg-black text-white justify-center items-center">
      <h2 className="text-4xl font-bold">{count}</h2>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="p-2 text-lg bg-white rounded-lg text-black font-medium"
      >
        Increment
      </button>
    </div>
  );
}
export default Counter;
