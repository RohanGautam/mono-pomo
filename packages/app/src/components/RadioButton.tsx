import { timerEmojiMap, TimerType } from "@mono-pomo/common";
import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const timerTypes: TimerType[] = ["pomodoro", "short break", "long break"];

export const RadioButtons = ({
  onTimerTypeSelect,
}: {
  onTimerTypeSelect: Function;
}) => {
  const [value, setValue]: [TimerType, any] = React.useState("pomodoro");

  const onRadioValueChange = (value: TimerType) => {
    setValue(value);
    onTimerTypeSelect(value);
  };

  return (
    <RadioButton.Group
      onValueChange={(value) => onRadioValueChange(value as TimerType)}
      value={value}
    >
      {timerTypes.map((type) => (
        <RadioButton.Item
          label={`${type} ${timerEmojiMap[type]}`}
          value={type}
          key={type}
        />
      ))}
      {/* <RadioButton.Item label="pomodoro" value="pomodoro" />
      <RadioButton.Item label="short break" value="short break" />
      <RadioButton.Item label="long break" value="long break" /> */}
    </RadioButton.Group>
  );
};
