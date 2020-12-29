import {
  Text,
} from '@chakra-ui/react'

import { TimerText } from '../components/TimerText'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Container } from '../components/Container'
import { TimerControlButton } from '../components/TimerControlButton'

import { Timer } from "@mono-pomo/common";
import { useState } from 'react'


const timer : Timer = new Timer();
const Index = () => {
  let [showStart, setShowStart]: [boolean, any] = useState(true);
  const toggleTimer = () => {
    timer.isRunning ? timer.stopTimer() : timer.startTimer();
    setShowStart(!timer.isRunning);
  }
  return (
    <Container height="100vh">
      <TimerText displayTime="25:00" />

      <DarkModeSwitch />
      <TimerControlButton showStart={showStart} toggleTimerCallback={toggleTimer}/>
    </Container>
  )
}

export default Index
