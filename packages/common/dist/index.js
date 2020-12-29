"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timerMap = exports.appName = exports.formatTime = exports.useEffectOnlyOnce = exports.useTimer = void 0;
const react_1 = require("react");
var react_timer_hook_1 = require("react-timer-hook");
Object.defineProperty(exports, "useTimer", { enumerable: true, get: function () { return react_timer_hook_1.useTimer; } });
exports.useEffectOnlyOnce = (func) => react_1.useEffect(func, []);
function formatTime(minutes, seconds) {
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
exports.formatTime = formatTime;
function appName() {
    return "pomo-lite";
}
exports.appName = appName;
exports.timerMap = {
    pomodoro: 25,
    "short break": 5,
    "long break": 15,
};
