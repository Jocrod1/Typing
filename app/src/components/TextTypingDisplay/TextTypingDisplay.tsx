import { useEffect, useRef, useState } from "react";
import WordTypingDisplay from "../WordTypingDisplay/WordTypingDisplay";
type Props = {
  displayText: string[];
  activeIndex: number;
};

const TextTypingDisplay = ({ displayText, activeIndex }: Props) => {
  const [cursorPosition, setCursorPosition] = useState(0);
  const contRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!!refs.current.length && !!contRef.current) {
      setCursorPosition(
        refs.current[activeIndex].getBoundingClientRect().left -
          contRef.current.getBoundingClientRect().left
      );
    }
    return () => {};
  }, [activeIndex]);

  return (
    <div
      ref={contRef}
      style={{
        fontSize: 30,
        fontWeight: "bold",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 2,
          height: "100%",
          position: "absolute",
          top: 0,
          left: cursorPosition,
          backgroundColor: "white",
        }}
      />
      {displayText.map((w, i) => {
        return (
          <div
            key={i}
            ref={(el) => (el != null ? (refs.current[i] = el) : null)}
          >
            <WordTypingDisplay word={w} active={i < activeIndex} />
          </div>
        );
      })}
    </div>
  );
};

export default TextTypingDisplay;
