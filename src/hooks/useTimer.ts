import { useRef, useState } from "react";

const useTimer = (onTimerFinished: () => void) => {
  const [timeLeft, _setTimeLeft] = useState(5);
  const timeLeftRef = useRef(timeLeft);

  const setTimeLeft = (s: (i: number) => number) => {
    const state = s(timeLeftRef.current);
    timeLeftRef.current = state;
    _setTimeLeft(state);
  };

  const timerRef = useRef<number>();

  const setTimer = () => {
    if (!!timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((tl) => tl - 1);
      if (timeLeftRef.current <= 0) {
        finishTimer();
      }
    }, 1000);
  };

  const finishTimer = () => {
    clearInterval(timerRef.current);
    onTimerFinished();
  };

  return {
    timeLeft,
    setTimer,
    finishTimer,
  };
};

export default useTimer;
