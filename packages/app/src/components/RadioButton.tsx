import { TimerType } from "@mono-pomo/common";
import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

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
      <RadioButton.Item label="pomodoro" value="pomodoro" />
      <RadioButton.Item label="short break" value="short break" />
      <RadioButton.Item label="long break" value="long break" />
    </RadioButton.Group>
  );
};
