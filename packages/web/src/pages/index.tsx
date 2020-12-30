import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Container } from "../components/Container";
import { TimerLengthPicker } from "../components/TimerLengthPicker";

import { TimerType, timerMap } from "@mono-pomo/common";
import { useState } from "react";
import { Timer } from "../components/Timer";
import Notification from "react-web-notification";

export interface TimeInfo {
  timerType: TimerType;
  expiryTime: number;
}

const Index = () => {
  let time = new Date();
  let [timeInfo, setTimeInfo]: [TimeInfo, any] = useState({
    timerType: "pomodoro",
    expiryTime: time.setMinutes(time.getMinutes() + 25),
  });

  const onTimerTypeSelect = (value: TimerType) => {
    console.log("Selected: ", value, "the time is ", timerMap[value]);
    let time = new Date();
    setTimeInfo({
      timerType: value,
      expiryTime: time.setMinutes(time.getMinutes() + timerMap[value]),
    });
  };

  const onTimerComplete = () => {
    console.log("timer complete");
    alert("timer complete");
  };

  return (
    <Container height="100vh">
      <TimerLengthPicker
        onTimerTypeSelect={onTimerTypeSelect}
      ></TimerLengthPicker>
      <Timer
        timeInfo={timeInfo}
        onTimerComplete={onTimerComplete}
        key={timeInfo.expiryTime}
      ></Timer>

      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
