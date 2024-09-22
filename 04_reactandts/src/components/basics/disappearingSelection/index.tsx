"use client";
import { useState } from "react";
import { initialLetters } from "./data";
import Letter from "./Letter";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState<{
    id: number;
    subject: string;
    isStarred: boolean;
  } | null>(null);

  function handleHover(letter: {
    id: number;
    subject: string;
    isStarred: boolean;
  }) {
    setHighlightedLetter(letter);
  }

  function handleStar(starred: {
    id: number;
    subject: string;
    isStarred: boolean;
  }) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <div className="text-black">
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter === highlightedLetter}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
      
    </div>
  );
}
