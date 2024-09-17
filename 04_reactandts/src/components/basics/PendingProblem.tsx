"use client";
import { useState } from "react";

export default function PendingProblem() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  return (
    <div className="flex justify-center border border-black  p-1 rounded-lg gap-2 items-center flex-col text-black">
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button
        className="bg-black text-white px-2     1py-1 rounded-lg "
        onClick={handleClick}
      >
        Buy
      </button>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
