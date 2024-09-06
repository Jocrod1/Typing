import { useRef, useState } from "react"
import { GameManagerModel, GameState } from "./types";
import useTimer from "./useTimer";

const useGameManager = () : GameManagerModel => {
    const [gameState, _setGameState] = useState<GameState>("IDLE");
    const gameStateRef = useRef(gameState);
    
    const setGameState = (val : GameState) => {
        _setGameState(val);
        gameStateRef.current = val;
    }
    
    
    const BeginGame = () => {
        setGameState("ACTIVE");
        setTimer();
    }
    
    const FinishGame = () => {
        setGameState("FINISHED");
        finishTimer();
    }

    const { timeLeft, setTimer, finishTimer } = useTimer(() => {
        setGameState("FINISHED");
    });
    
    return {gameState, gameStateRef, BeginGame, FinishGame, timeLeft};
}

export default useGameManager