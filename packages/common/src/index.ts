export function appName() {
  return "pomo-lite";
}

export class Timer {
  private timerRunning: boolean = false;

  // constructor() {
  //   this.startTimer.bind(this);
  //   this.stopTimer.bind(this);
  // }

  startTimer() {
    console.log("Starting timer...");
    this.timerRunning = true;
  }
  stopTimer() {
    console.log("Starting timer...");
    this.timerRunning = false;
  }

  public get isRunning(): boolean {
    return this.timerRunning;
  }
}
