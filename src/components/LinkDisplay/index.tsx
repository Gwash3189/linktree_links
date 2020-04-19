import React from 'react'

import styles from './styles.module.css'
import { Container } from '../Container'

type Props = {
  children: React.ReactNode
}

export const LinkDisplay = (props: Props) => (
  <Container className={styles.linkDisplay}>
    { props.children }
  </Container>
)
