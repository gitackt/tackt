import React from 'react'
import { Box, Center, Text, Flex, Link } from '@chakra-ui/react'

import * as styles from '../styles'

export const Footer: React.FC = () => {
  return (
    <Center paddingY={styles.lg} background={styles.primary}>
      <Box>
        <Center>
          <Flex marginY={styles.lg} maxW="180px" justify="space-between" align="center">
            <Link href="https://www.facebook.com/gitackt" isExternal>
              <img
                style={{ margin: styles.md }}
                width="24px"
                src="./images/sns/facebook.svg"
                alt="facebook"
              />
            </Link>
            <Link href="https://github.com/gitackt" isExternal>
              <img
                style={{ margin: styles.md }}
                width="24px"
                src="./images/sns/github.svg"
                alt="github"
              />
            </Link>
            <Link href="https://www.instagram.com/picos_tackt/" isExternal>
              <img
                style={{ margin: styles.md }}
                width="24px"
                src="./images/sns/instagram.svg"
                alt="instagram"
              />
            </Link>
            <Link href="https://twitter.com/picos_tackt?lang=ja" isExternal>
              <img
                style={{ margin: styles.md }}
                width="24px"
                src="./images/sns/twitter.svg"
                alt="twitter"
              />
            </Link>
          </Flex>
        </Center>
        <Text color={styles.background} fontSize="12px" textAlign="center">
          Copyright 2018 ~ 2021 Takuto Mitsuhashi.
        </Text>
      </Box>
    </Center>
  )
}
