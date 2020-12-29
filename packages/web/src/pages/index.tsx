import { TimerText } from "../components/TimerText";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Container } from "../components/Container";
import { TimerLengthPicker } from "../components/TimerLengthPicker";

import { TimerType, timerMap } from "@mono-pomo/common";
import { useState } from "react";
import { Timer } from "../components/Timer";

const Index = () => {
  let time = new Date();
  let [expiryTime, setExpiryTime]: [number, any] = useState(
    time.setMinutes(time.getMinutes() + 25)
  );

  const onTimerTypeSelect = (value: TimerType) => {
    console.log("Selected: ", value, "the time is ", timerMap[value]);
    let time = new Date();
    setExpiryTime(time.setMinutes(time.getMinutes() + timerMap[value]));
  };

  return (
    <Container height="100vh">
      <TimerLengthPicker
        onTimerTypeSelect={onTimerTypeSelect}
      ></TimerLengthPicker>
      <Timer expiryTime={expiryTime}></Timer>

      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
