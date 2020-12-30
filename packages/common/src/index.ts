import { EffectCallback, useEffect } from "react";

export { useTimer } from "react-timer-hook";

export const useEffectOnlyOnce = (func: EffectCallback) => useEffect(func, []);

export function formatTime(minutes: number, seconds: number): string {
  let s_str = "" + seconds;
  let m_str = "" + minutes;
  if (seconds < 10) {
    s_str = "0" + s_str;
  }
  if (minutes < 10) {
    m_str = "0" + m_str;
  }
  return `${m_str}:${s_str}`;
}

export function appName() {
  return "pomo-lite";
}

export type TimerType = "pomodoro" | "short break" | "long break";

export const timerMap = {
  pomodoro: 25,
  "short break": 1,
  "long break": 15,
};
