import { TimerText } from '../components/TimerText'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Container } from '../components/Container'
import { TimerControlButton } from '../components/TimerControlButton'

import { useTimer, useEffectOnlyOnce, formatTime } from "@mono-pomo/common";


const Index = () => {
  let time = new Date();
  let expiryTimestamp=time.setMinutes(time.getMinutes()+1); // in 5 mins

  const {
    seconds,
    minutes,
    isRunning,
    resume,
    pause
  } = useTimer({ expiryTimestamp: expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  // this is run only once in the beginning
  useEffectOnlyOnce(() => { pause(); });

  const toggleTimer = () => {
    isRunning ? pause() : resume();
    // if (isRunning) {
    //   console.log("PAUSE");      
    //   pause();
    // } else {
    //   console.log("RESUME");
    //   resume();
    // }
  }
  return (
    <Container height="100vh">
      <TimerText displayTime={formatTime(minutes, seconds)} />
      
      <DarkModeSwitch />
      <TimerControlButton showStart={!isRunning} toggleTimerCallback={toggleTimer}/>
    </Container>
  )
}

export default Index
