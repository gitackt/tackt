import React, { Fragment } from 'react'
import { Box, Text, Flex, Spacer, Link } from '@chakra-ui/react'

import * as styles from '../styles'

export type List = {
  title: string
  link?: string
  date?: string
}

export type Props = {
  title: string
  lists: Array<List>
}

export const List: React.FC<Props> = ({ title, lists }: Props) => {
  return (
    <Box paddingY={styles.x3l}>
      <Box padding={styles.x3l}>
        <Text fontFamily="Comfortaa" fontSize="24px" textAlign="center">
          {title}
        </Text>
      </Box>
      {lists.map(list => (
        <Flex
          align="center"
          key={list.title}
          paddingY={styles.xl}
          borderBottom={`1px solid ${styles.gray}`}
        >
          {list.link ? (
            <Link href={list.link} color={styles.primary} isExternal>
              {list.title}
            </Link>
          ) : (
            <Text>{list.title}</Text>
          )}
          {list.date && (
            <Fragment>
              <Spacer />
              <Text>{list.date}</Text>
            </Fragment>
          )}
        </Flex>
      ))}
    </Box>
  )
}
