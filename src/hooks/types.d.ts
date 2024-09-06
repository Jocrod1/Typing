import {MutableRefObject} from "react";

const GameStates = {
    IDLE: "IDLE",
    ACTIVE: "ACTIVE",
    FINISHED: "FINISHED"
};

type GameState = keyof typeof GameStates;

type GameManagerModel = {
    timeLeft?: number,
    gameState?: GameState;
    gameStateRef: MutableRefObject<GameState>;
    BeginGame: () => void;
    FinishGame: () => void;
}