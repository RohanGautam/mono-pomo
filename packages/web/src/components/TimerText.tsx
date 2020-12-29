import { Flex, Heading } from '@chakra-ui/react'

export const TimerText = ({ displayTime }: { displayTime: string }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="6vw">{displayTime}</Heading>
  </Flex>
)

// TimerText.defaultProps = {
//   title: 'with-chakra-ui-typescript',
// }
