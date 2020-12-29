import {
  Text,
} from '@chakra-ui/react'

import { TimerText } from '../components/TimerText'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Container } from '../components/Container'
import { TimerControlButton } from '../components/TimerControlButton'

import { Timer } from "@mono-pomo/common";


const timer : Timer = new Timer();
const Index = () => {
  return (
    <Container height="100vh">
      <TimerText displayTime="25:00" />

      <DarkModeSwitch />
      <TimerControlButton timer={timer} />
    </Container>
  )
}

export default Index
