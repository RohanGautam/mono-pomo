import {
  Text,
} from '@chakra-ui/react'

import { TimerText } from '../components/TimerText'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Container } from '../components/Container'
import { CTA } from '../components/CTA'

import { appName } from "@mono-pomo/common";

const Index = () => (
  <Container height="100vh">
    <TimerText displayTime="25:00" />
    
    <DarkModeSwitch />
    <CTA />
  </Container>
)

export default Index
