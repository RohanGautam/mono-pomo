import { TimerText } from "../components/TimerText";
import { TimerControlButton } from "../components/TimerControlButton";
import { useTimer, formatTime } from "@mono-pomo/common";
import React, { useEffect } from "react";

// const forceUpdate = useForceUpdate();
export const Timer = ({ expiryTime }: { expiryTime: number }) => {
  //   console.log("got:", expiryTime);
  const { seconds, minutes, isRunning, resume, pause, restart } = useTimer({
    expiryTimestamp: expiryTime,
    onExpire: () => console.warn("timer done!"),
  });

  // this will run only when the prop `expiryTime` changes.
  useEffect(() => {
    restart(expiryTime);
    // console.log("hmmmmm", isRunning);
    if (isRunning) {
      pause();
    }
    console.log("running", isRunning);
  }, [expiryTime]);

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
