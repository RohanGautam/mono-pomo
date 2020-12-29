import { EffectCallback } from "react";
export { useTimer } from "react-timer-hook";
export declare const useEffectOnlyOnce: (func: EffectCallback) => void;
export declare function formatTime(minutes: number, seconds: number): string;
export declare function appName(): string;
