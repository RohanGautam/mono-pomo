import { EffectCallback } from "react";
export { useTimer } from "react-timer-hook";
export declare const useEffectOnlyOnce: (func: EffectCallback) => void;
export declare function formatTime(minutes: number, seconds: number): string;
export declare type TimerType = "pomodoro" | "short break" | "long break";
export declare const timerMap: {
    pomodoro: number;
    "short break": number;
    "long break": number;
};
export declare const timerEmojiMap: {
    pomodoro: string;
    "short break": string;
    "long break": string;
};
