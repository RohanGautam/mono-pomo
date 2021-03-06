import { Flex, Heading } from "@chakra-ui/react";

export const TimerText = ({ displayTime }: { displayTime: string }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="10vw">{displayTime}</Heading>
  </Flex>
);
