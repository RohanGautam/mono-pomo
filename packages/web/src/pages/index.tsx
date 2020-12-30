import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Container } from "../components/Container";
import { TimerLengthPicker } from "../components/TimerLengthPicker";

import {
  TimerType,
  timerMap,
  useTimer,
  useEffectOnlyOnce,
  formatTime,
} from "@mono-pomo/common";
import { useEffect, useState } from "react";
// import { Timer } from "../components/Timer";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { TimerText } from "../components/TimerText";
import { TimerControlButton } from "../components/TimerControlButton";

const Notification = dynamic(() => import("react-web-notification"), {
  ssr: false,
});
// import Notification from "react-web-notification";

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

  useEffect(() => {
    console.log("running pause on time info change");
    // restart(timeInfo.expiryTime);
    pause();
  }, [timeInfo]);
  // useEffectOnlyOnce(() => {
  //   pause();
  // });

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

  const onTimerTypeSelect = (value: TimerType) => {
    console.log("Selected: ", value, "the time is ", timerMap[value]);
    let time = new Date();
    const expiryTime = time.setMinutes(time.getMinutes() + timerMap[value]);
    // update the timer time
    restart(expiryTime);
    setTimeInfo({
      timerType: value,
      expiryTime: expiryTime,
    });
    // restart(timeInfo.expiryTime);
  };
  const toggleTimer = () => {
    console.log("toggle");

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
    // showNotification();
    // reset to the same time type's beginning
    onTimerTypeSelect(timeInfo.timerType);
  };

  return (
    <Container height="100vh">
      <TimerLengthPicker
        onTimerTypeSelect={onTimerTypeSelect}
      ></TimerLengthPicker>
      {/* <Timer
        timeInfo={timeInfo}
        toggleTimer={toggleTimer}
        isRunning={isRunning}
        minutes={minutes}
        seconds={seconds}
        // pause={pause}
        key={timeInfo.expiryTime}
      ></Timer> */}
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
        onShow={() => console.log("showing...")}
        // onClick={this.handleNotificationOnClick.bind(this)}
        // onClose={this.handleNotificationOnClose.bind(this)}
        // onError={this.handleNotificationOnError.bind(this)}
        timeout={50000}
        title={notification.title}
        options={notification.options}
        // swRegistration={this.props.swRegistration}
      />

      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
