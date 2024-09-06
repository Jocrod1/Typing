import { useEffect, useRef, useState } from "react";
import { GameManagerModel } from "./types";

const useTyper = (displayText: string[], {gameStateRef, BeginGame, FinishGame}: GameManagerModel) => {
    const [activeIndex, _setActiveIndex] = useState(0);

    const ActiveIndexRef = useRef(activeIndex);

    const setActiveIndex = (s: (i: number) => number) => {
        const state = s(ActiveIndexRef.current);
        ActiveIndexRef.current = state;
        _setActiveIndex(state);
      };
    
      useEffect(() => {
        const event = (event: KeyboardEvent) => {
          if (gameStateRef.current == "IDLE") BeginGame();
          if (gameStateRef.current == "ACTIVE" && event.key == displayText[ActiveIndexRef.current]){
              setActiveIndex((i) => (i += 1));
              if(ActiveIndexRef.current >= displayText.length - 1)
                FinishGame();
          }
        };
        addEventListener("keypress", event);
        return () => {
          removeEventListener("keypress", event);
        };
      }, [displayText]);

      return {activeIndex}
}

export default useTyper