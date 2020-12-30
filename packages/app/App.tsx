import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import {
  formatTime,
  timerEmojiMap,
  timerMap,
  TimerType,
  useTimer,
} from "@mono-pomo/common";

interface TimeInfo {
  timerType: TimerType;
  expiryTime: number;
}

const initialTimerType: TimerType = "pomodoro";

export default function App() {
  let time = new Date();
  // time info hook
  let [timeInfo, setTimeInfo]: [TimeInfo, any] = useState({
    timerType: initialTimerType,
    expiryTime: time.setMinutes(time.getMinutes() + timerMap[initialTimerType]),
  });
  //timer hook
  const { seconds, minutes, isRunning, resume, pause, restart } = useTimer({
    expiryTimestamp: timeInfo.expiryTime,
    onExpire: () => onTimerComplete(),
  });

  // hook to pause the timer whenever the time info changes
  useEffect(() => {
    pause();
  }, [timeInfo]);

  const onTimerTypeSelect = (value: TimerType) => {
    console.log("Selected: ", value, "the time is ", timerMap[value]);
    let time = new Date();
    const expiryTime = time.setMinutes(time.getMinutes() + timerMap[value]);
    // update the timer time
    restart(expiryTime);
    // update the timeinfo
    setTimeInfo({
      timerType: value,
      expiryTime: expiryTime,
    });
  };

  const toggleTimer = () => {
    isRunning ? pause() : resume();
  };

  const showNotification = () => {
    console.log("TODO: implement push notifications");
  };

  const onTimerComplete = () => {
    console.log("timer complete");
    showNotification();
    // reset to the same (time type)'s beginning
    onTimerTypeSelect(timeInfo.timerType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{formatTime(minutes, seconds)}</Text>
      <Button
        title={!isRunning ? "START" : "STOP"}
        onPress={() => toggleTimer()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 50,
  },
  timerToggleButton: {
    fontSize: 50,
  },
});
