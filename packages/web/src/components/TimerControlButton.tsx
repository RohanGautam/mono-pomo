import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const TimerControlButton = ({start}:{start:boolean}) => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    height="5rem"
    maxWidth="48rem"
    py={2}
  >

      <Button width="100%" height="100%" variant="solid" colorScheme="green">
        {start ? "START" : "STOP"}
      </Button>
  </Container>
)
