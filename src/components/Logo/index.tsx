import React from 'react'

import { Container } from '../Container'
import LogoImage from '../../svgs/logo.svg'
import styles from './styles.module.css'

export const Logo = () => (
  <Container className={styles.container}>
    <LogoImage />
  </Container>
)
