export { useTimer } from "react-timer-hook";
export declare function formatTime(minutes: number, seconds: number): string;
export declare function appName(): string;
export declare type TimerType = "pomodoro" | "short break" | "long break";
export declare const timerMap: {
    pomodoro: number;
    "short break": number;
    "long break": number;
};
