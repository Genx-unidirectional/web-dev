"use client";
import { useState } from "react";

function TicTacToe() {
  const [isX, setIsX] = useState(false);
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [winner, setWinner] = useState<
    "X" | "O" | "Tie" | undefined | "" | string
  >("");
  const currentState = history[history.length - 1];
  const jumpTo = (id: number) => {
    setHistory((prev) => prev.slice(0, id + 1));
  };
  const handleClick = (id: number) => {
    const newArr = history[history.length - 1].slice(0);
    if (history.length === 9) {
      setWinner("tie");
    }
    if ((winner && winner.length > 0) || newArr[id] || history.length === 10) {
      return;
    }
    if (isX) {
      newArr[id] = "O";
      setIsX(false);
    } else {
      newArr[id] = "X";
      setIsX(true);
    }
    setHistory((prev) => [...prev, newArr]);
    const newWinner = winningFunction(newArr);
    if (newWinner) {
      console.log(newWinner);

      setWinner(newWinner);
    }
  };

  return (
    <div className="flex flex-col   gap-2 p-3 rounded-lg bg-white">
      <div className="text-center text-black">
        {!winner || (winner && winner?.length < 0) ? (
          <p>Winner is not yet declared.</p>
        ) : (
          <p className="">
            {winner === "tie" ? "Game is" : "Winner is"} {winner}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
          {currentState.map((item, idx) => {
            return (
              <button
                key={`${idx}a1`}
                onClick={() => handleClick(idx)}
                className="w-12 h-12 rounded-lg bg-white border border-black text-black flex justify-center items-center"
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="bg-white rounded-lg border overflow-hidden  overflow-y-scroll  h-[150px]  border-black flex flex-col p-2">
          {history.map((item, idx) => {
            if (idx === 0) {
              return;
            }
            return (
              <button
                key={`${idx}a2`}
                onClick={() => jumpTo(idx)}
                className=" p-1 border border-black text-black text-sm rounded-lg"
              >
                Hop on {idx}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default TicTacToe;

const winningFunction = (strArr: (string | null)[]) => {
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < winArr.length; i++) {
    const [a, b, c] = winArr[i];
    if (strArr[a] && strArr[a] === strArr[b] && strArr[b] === strArr[c]) {
      return strArr[a];
    }
  }
};
