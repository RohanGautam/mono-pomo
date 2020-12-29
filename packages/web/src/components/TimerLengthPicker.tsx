import {  Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react'

import { Container } from './Container'
import { TimerType } from "@mono-pomo/common";


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props:any) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" width="100%" >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        width="100%"
        display="grid"
        placeItems="center"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export const TimerLengthPicker = ({onTimerTypeSelect}:{onTimerTypeSelect:any}) => {
    const options :TimerType[] = ["pomodoro", "short break", "long break"]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "timer",
        defaultValue: "pomodoro",
        onChange: onTimerTypeSelect,
    })

    const group = getRootProps()
    return (
        <Container
            flexDirection="row"
            position="fixed"
            // bottom="0"
            placeItems="center"
           
            width="100%"
            maxWidth="48rem"
            py={2}
        >
            <HStack {...group} width="100%">
            {options.map((value) => {
                const radio = getRadioProps({ value:value, enterKeyHint:"choose timer type" })
                return (
                <RadioCard width="100%" key={value} {...radio}>
                    {value}
                </RadioCard>
                )
            })}
            </HStack>

        </Container>
    )
}