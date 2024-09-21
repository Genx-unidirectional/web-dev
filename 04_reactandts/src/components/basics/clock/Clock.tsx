"use client";
import { useEffect, useRef, useState } from "react";
import Time from "./Time";

function clock() {
  const [color, setColor] = useState("pink");
  const [time, setTime] = useState("");
  const index = useRef<NodeJS.Timeout>();
  useEffect(() => {
    const timer = () => {
      index.current = setInterval(() => {
        const newTime = new Date();
        const h = newTime.getHours();
        const m = newTime.getMinutes();
        const s = newTime.getSeconds();
        setTime(`${h}:${m}:${s}`);
      }, 1000);
    };
    timer();
    return () => {
      clearInterval(index.current);
    };
  }, []);
  return (
    <div className="border border-black p-2 flex flex-col justify-center items-center  text-black">
      <select
        className="text-black"
        name="color"
        id="color"
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="pink">Pink</option>
        <option value="blue">Blue</option>
        <option value="violet">Violet</option>
      </select>
      <Time color={color} time={time} />
    </div>
  );
}
export default clock;
