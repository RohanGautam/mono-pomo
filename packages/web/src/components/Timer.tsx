import { TimerText } from "../components/TimerText";
import { TimerControlButton } from "../components/TimerControlButton";
import { useTimer, formatTime, useEffectOnlyOnce } from "@mono-pomo/common";
import React from "react";

export const Timer = ({ expiryTime }: { expiryTime: number }) => {
  const { seconds, minutes, isRunning, resume, pause } = useTimer({
    expiryTimestamp: expiryTime,
    onExpire: () => console.warn("timer done!"),
  });
  //   this will run only once, when the widget is first created.
  // it is created every time expirytime changes, as we are giving it a new key.
  useEffectOnlyOnce(() => {
    pause();
  });

  const toggleTimer = () => {
    isRunning ? pause() : resume();
  };
  return (
    <React.Fragment>
      <TimerText displayTime={formatTime(minutes, seconds)} />
      <TimerControlButton
        showStart={!isRunning}
        toggleTimerCallback={toggleTimer}
      />
    </React.Fragment>
  );
};
