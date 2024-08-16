"use client";
//make winning function which has winning moves

import { useState } from "react";

function TicTacToe() {
  const [isX, setIsX] = useState(false);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [winner, setWinner] = useState<null | string>(null);
  const currentStatus = history[history.length - 1];
  const handleClick = (id: number) => {
    const newStatus = history[history.length - 1].slice(0);

    if (winner || newStatus[id]) {
      return;
    }
    if (isX) {
      newStatus[id] = "X";
      setIsX(false);
    } else {
      newStatus[id] = "O";
      setIsX(true);
    }
    const newWinner = winningMark(newStatus);
    setHistory((prev) => [...prev, newStatus]);
    if (newWinner) {
      setWinner(newWinner);
      return;
    }

    if (history.length === 9) {
      setWinner("draw");
    }
  };
  const jumpTo = (id: number) => {
    setHistory((prev) => prev.slice(0, id));
    setIsX(!isX);
    setWinner("");
  };
  console.log(winner);
  return (
    <div className="flex justify-center gap-10 items-center">
      <div>
        <div>
          {winner ? (
            winner === "draw" ? (
              <p>Winner is {winner}</p>
            ) : (
              <p>Winner is {winner}</p>
            )
          ) : null}
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
          {currentStatus.map((item, idx) => {
            return (
              <button
                key={`${idx}x3`}
                onClick={() => handleClick(idx)}
                className="w-12 h-12 rounded-md text-3xl font-bold bg-white text-black"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex h-[150px] rounded-md overflow-hidden w-[150px] overflow-y-scroll bg-white text-black font-bold font-mono justify-center items-center flex-col p-2 py-4">
        {history.map((item, idx) => {
          return (
            <button onClick={() => jumpTo(idx)} key={`${idx}x4`}>
              Jump to {idx}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default TicTacToe;

function winningMark(arr: (string | null)[]) {
  const combo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < combo.length; i++) {
    const [a, b, c] = combo[i];
    if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
      return arr[a];
    }
  }
}
