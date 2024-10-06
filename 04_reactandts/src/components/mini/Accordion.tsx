"use client";
import { ACCORDION_DATA } from "@/lib/accordiondata";
import { useState } from "react";
function Accordion() {
  const [single, setSingle] = useState(true);
  const [activeArr, setActiveArr] = useState<number[]>([]);
  const [openId, setOpenId] = useState<number | null>();
  const handleMultiple = (id: number) => {
    if (activeArr.indexOf(id) === -1) {
      setActiveArr((prev) => [...prev, id]);
    } else {
      setActiveArr((prev) => prev.filter((a) => a !== id));
    }
  };
  const handleSingle = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  return (
    <ul className="flex justify-center flex-col items-center">
      <li className="font-bold" onClick={() => setSingle(!single)}>
        Click to toggle single
      </li>
      {ACCORDION_DATA.map((item, idx) => {
        return (
          <li className="p-2" key={`${item.id}aa21`}>
            <label
              onClick={() => {
                single ? handleSingle(idx) : handleMultiple(idx);
              }}
              htmlFor=""
            >
              {item.subject}
            </label>
            {single && openId === idx && <p>{item.information}</p>}
            {!single && activeArr.includes(idx) && <p>{item.information}</p>}
          </li>
        );
      })}
    </ul>
  );
}
export default Accordion;
