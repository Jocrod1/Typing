import { useState } from "react";
import TextTypingDisplay from "../../components/TextTypingDisplay/TextTypingDisplay";
import Timer from "../../components/Timer/Timer";
import useGameManager from "../../hooks/useGameManager";
import useTyper from "../../hooks/useTyper";

const MainView = () => {
  const { gameStateRef, BeginGame, FinishGame, timeLeft } = useGameManager();

  const [displayText, setDisplayText] = useState<string[]>([
    ..."Lorem ipsum Dolor".split(""),
    " ",
  ]);

  const { activeIndex } = useTyper(displayText, {
    gameStateRef,
    BeginGame,
    FinishGame,
  });

  return (
    <div>
      <Timer seconds={timeLeft ?? 0} />
      <TextTypingDisplay displayText={displayText} activeIndex={activeIndex} />
    </div>
  );
};

export default MainView;
