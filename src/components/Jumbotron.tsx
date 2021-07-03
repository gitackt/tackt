import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'

export const Jumbotron: React.FC = () => {
  return (
    <Center>
      <Box marginY="280px">
        <Text fontFamily="Comfortaa" fontSize="36px" textAlign="center">
          TAKUTO MITSUHASHI
        </Text>
        <Text fontFamily="Comfortaa" fontSize="18px" textAlign="center">
          PORTFOLIO WEBSITE
        </Text>
      </Box>
    </Center>
  )
}
