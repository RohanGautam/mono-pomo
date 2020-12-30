import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Container } from "../components/Container";
import { TimerLengthPicker } from "../components/TimerLengthPicker";

import { TimerType, timerMap, useTimer, formatTime } from "@mono-pomo/common";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import useSound from "use-sound";

import { TimerText } from "../components/TimerText";
import { TimerControlButton } from "../components/TimerControlButton";

const SOUND_PATH: string = "./badumtss.mp3";

// to import in browser, and not  try to server side render the loading of this module
const Notification = dynamic(() => import("react-web-notification"), {
  ssr: false,
});

interface NotificationData {
  ignore: boolean;
  title: string;
  options: {
    body: string;
    icon: string;
    sound?: string;
  };
}

export interface TimeInfo {
  timerType: TimerType;
  expiryTime: number;
}

const Index = () => {
  let time = new Date();
  // time info hook
  let [timeInfo, setTimeInfo]: [TimeInfo, any] = useState({
    timerType: "pomodoro",
    expiryTime: time.setMinutes(time.getMinutes() + 25),
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

  // notification data hook
  let [notification, setNotification]: [NotificationData, any] = useState({
    ignore: true,
    title: "",
    options: {
      body: "",
      icon:
        "'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png'",
    },
  });

  const [playSound] = useSound(SOUND_PATH);

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
    if (notification.ignore) {
      console.log("[notif], ignore set to true, ignoring notif request");
      return;
    }
    setNotification({
      ignore: false,
      title: `${timeInfo.timerType} over!`,
      options: {
        body: "",
        icon:
          "'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png'",
      },
    } as NotificationData);
  };

  const onTimerComplete = () => {
    console.log("timer complete");
    showNotification();
    // reset to the same (time type)'s beginning
    onTimerTypeSelect(timeInfo.timerType);
  };

  return (
    <Container height="100vh">
      <Head>
        <title>
          {formatTime(minutes, seconds)} - {timeInfo.timerType}
        </title>
      </Head>
      <TimerLengthPicker
        onTimerTypeSelect={onTimerTypeSelect}
      ></TimerLengthPicker>

      <TimerText displayTime={formatTime(minutes, seconds)} />
      <TimerControlButton
        showStart={!isRunning}
        toggleTimerCallback={toggleTimer}
      />

      <Notification
        //@ts-ignore
        ignore={notification.ignore && notification.title !== ""}
        notSupported={() => {
          console.error("[error] notifications not supported");
          setNotification({ ...notification, ignore: true });
        }}
        onPermissionGranted={() => {
          console.log("[ok] permissions granted");
          setNotification({ ...notification, ignore: false });
          console.log(notification);
        }}
        onPermissionDenied={() => {
          console.error("[error] permissions not granted");
          setNotification({ ...notification, ignore: true });
        }}
        onShow={() => playSound()}
        timeout={50000}
        title={notification.title}
        options={notification.options}
      />

      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
