import {  Button } from '@chakra-ui/react'

import { Container } from './Container'

import { Timer } from "@mono-pomo/common";
import { useState } from 'react';

export const TimerControlButton = ({ timer }: { timer: Timer }) => { 
    const showStart = !timer.isRunning;

    const [counter, setCount]: [number, any] = useState(0);
    
    
    return (
        <Container
            flexDirection="row"
            position="fixed"
            bottom="0"
            width="100%"
            height="5rem"
            maxWidth="48rem"
            py={2}
        >

            {/* <Button width="100%" height="100%" variant="solid" colorScheme="green" onClick={showStart? ()=> timer.startTimer() : ()=> timer.stopTimer()} >
                {showStart? "START" : "STOP"}
            </Button> */}
            <Button onClick={() => setCount(counter + 1)}>Hi, add me daddy: { counter }</Button> 
        </Container>
    );
}


