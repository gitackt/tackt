import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'

export const JumbotronComponent: React.FC = () => {
  return (
    <Center>
      <Box marginY="240px">
        <Text fontSize="24px" textAlign="center">
          TAKUTO MITSUHASHI
        </Text>
        <Text fontSize="18px" textAlign="center">
          PORTFOLIO WEBSITE
        </Text>
      </Box>
    </Center>
  )
}
