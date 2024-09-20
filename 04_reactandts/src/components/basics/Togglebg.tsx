"use client";
import CN from "@/lib/utils";
import { useState } from "react";
export default function Togglebg() {
  const [active, setActive] = useState(false);
  return (
    <div
      className={CN("bg-pink-500 p-10", {
        "bg-yellow-200": active,
      })}
    >
      <img
        onClick={() => setActive(!active)}
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
