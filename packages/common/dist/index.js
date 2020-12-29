"use strict";
// import { useState, useEffect } from "react";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = exports.appName = void 0;
function appName() {
    return "pomo-lite";
}
exports.appName = appName;
class Timer {
    constructor() {
        this.timerRunning = false;
    }
    // constructor() {
    //   this.startTimer.bind(this);
    //   this.stopTimer.bind(this);
    // }
    startTimer() {
        console.log("Starting timer...");
        this.timerRunning = true;
    }
    stopTimer() {
        console.log("Stopping timer...");
        this.timerRunning = false;
    }
    get isRunning() {
        return this.timerRunning;
    }
}
exports.Timer = Timer;
// export function useTimer() {
// }
