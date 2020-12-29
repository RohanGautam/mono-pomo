import {
  Text,
} from '@chakra-ui/react'

import { TimerText } from '../components/TimerText'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Container } from '../components/Container'
import { TimerControlButton } from '../components/TimerControlButton'

import { appName } from "@mono-pomo/common";

const Index = () => (
  <Container height="100vh">
    <TimerText displayTime="25:00" />
    
    <DarkModeSwitch />
    <TimerControlButton start={true} />
  </Container>
)

export default Index
