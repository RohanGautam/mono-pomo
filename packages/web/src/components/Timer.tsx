import { TimerText } from "../components/TimerText";
import { TimerControlButton } from "../components/TimerControlButton";
import { useTimer, formatTime, useEffectOnlyOnce } from "@mono-pomo/common";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import { TimeInfo } from "../pages";

// todo: ring a sound and do stuff to get attention on expire

export const Timer = ({
  timeInfo,
  toggleTimer,
  isRunning,
  minutes,
  seconds,
}: //   pause,
{
  timeInfo: TimeInfo;
  toggleTimer: Function;
  //   pause: Function;
  isRunning: boolean;
  minutes: number;
  seconds: number;
}) => {
  // timer hook
  //   const { seconds, minutes, isRunning, resume, pause } = useTimer({
  //     expiryTimestamp: timeInfo.expiryTime,
  //     onExpire: () => onTimerComplete(),
  //   });
  //   this will run only once, when the widget is first created.
  //   it is created every time expirytime changes, as we are giving it a new key.
  //   useEffectOnlyOnce(() => {
  //     console.log("in here");
  //     pause();
  //     // if (isRunning) {
  //     //   toggleTimer();
  //     // }
  //   });
  //   useEffect(() => {
  //     pause(timeInfo.expiryTime);
  //     // pause();
  //   }, [timeInfo]);

  return (
    <React.Fragment>
      <Head>
        <title>
          {formatTime(minutes, seconds)} - {timeInfo.timerType}
        </title>
      </Head>

      <TimerText displayTime={formatTime(minutes, seconds)} />
      <TimerControlButton
        showStart={!isRunning}
        toggleTimerCallback={toggleTimer}
      />
    </React.Fragment>
  );
};
