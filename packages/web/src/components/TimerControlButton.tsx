import {  Button } from '@chakra-ui/react'

import { Container } from './Container'

export const TimerControlButton = ({showStart, toggleTimerCallback }: {showStart:boolean, toggleTimerCallback:Function }) => { 
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

            <Button width="100%" height="100%" variant="solid" colorScheme="green" onClick={()=>toggleTimerCallback()} >
                {showStart? "START" : "STOP"}
            </Button>
        </Container>
    );
}


