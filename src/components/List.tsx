import React, { Fragment } from 'react'
import { Box, Text, Flex, Spacer, Link } from '@chakra-ui/react'

import * as styles from '../styles'

export type List = {
  left: string
  right?: string
  leftLink?: string
  rightLink?: string
}

export type Props = {
  title: string
  lists: Array<List>
}

export const List: React.FC<Props> = ({ title, lists }: Props) => {
  return (
    <Box paddingY={styles.x2l}>
      <Box padding={styles.x2l}>
        <Text fontFamily="Comfortaa" fontSize="32px" textAlign="center">
          {title}
        </Text>
      </Box>
      {lists.map(list => (
        <Flex
          align="center"
          key={list.left}
          paddingY={styles.md}
          borderBottom={`1px solid ${styles.gray}`}
        >
          {list.leftLink ? (
            <Link href={list.leftLink} color={styles.primary} isExternal>
              {list.left}
            </Link>
          ) : (
            <Text>{list.left}</Text>
          )}
          {list.right && (
            <Fragment>
              <Spacer />
              {list.rightLink ? (
                <Link href={list.rightLink} color={styles.primary} isExternal>
                  {list.right}
                </Link>
              ) : (
                <Text>{list.right}</Text>
              )}
            </Fragment>
          )}
        </Flex>
      ))}
    </Box>
  )
}
