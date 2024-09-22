type PropsType = {
  letter: {
    id: number;
    subject: string;
    isStarred: boolean;
  };
  isHighlighted: boolean;
  onHover: (letter: {
    id: number;
    subject: string;
    isStarred: boolean;
  }) => void;
  onToggleStar: (starred: {
    id: number;
    subject: string;
    isStarred: boolean;
  }) => void;
};

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: PropsType) {
  return (
    <li
      className={isHighlighted ? "highlighted" : ""}
      onFocus={() => {
        onHover(letter);
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
