type Props = {
  word: string;
  active: boolean;
};

const WordTypingDisplay = ({ word, active }: Props) => {
  return (
    <span style={{ whiteSpace: "pre-wrap", opacity: active ? 1 : 0.5 }}>
      {word}
    </span>
  );
};

export default WordTypingDisplay;
