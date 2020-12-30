import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { RadioButtons } from "./src/components/RadioButton";
import {
  formatTime,
  timerMap,
  TimerType,
  useEffectOnlyOnce,
  useTimer,
} from "@mono-pomo/common";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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
    // expiryTime: time.setSeconds(time.getSeconds() + 5),
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
  // useEffect(async() => {
  //   pause();
  // }, []);
  useEffectOnlyOnce(() => {
    console.log("here");

    askPermissions().then((val) => {
      console.log("got permissions: ", val);
    });
  });

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

  const showNotification = async () => {
    let notifId: string = await Notifications.scheduleNotificationAsync({
      content: { title: `${timeInfo.timerType} over!` },
      trigger: {
        date: new Date().getTime(),
        repeats: false,
        seconds: 0.1,
      },
    });
    console.log(notifId);
  };
  const onTimerComplete = () => {
    console.log("timer complete");
    showNotification();
    // reset to the same (time type)'s beginning
    onTimerTypeSelect(timeInfo.timerType);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <RadioButtons onTimerTypeSelect={onTimerTypeSelect}></RadioButtons>
        <Text style={styles.bigText}>{formatTime(minutes, seconds)}</Text>

        {/* 
        // @ts-ignore */}
        <Button
          mode="outlined"
          onPress={() => toggleTimer()}
          color={!isRunning ? "green" : "red"}
        >
          <Text style={styles.timerToggleText}>
            {!isRunning ? "START" : "STOP"}
          </Text>
        </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 80,
    textAlign: "center",
  },
  timerToggleText: {
    fontSize: 30,
  },
});

const askPermissions = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    return false;
  }
  return true;
};
