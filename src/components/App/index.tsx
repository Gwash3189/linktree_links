import React from 'react'

import styles from './styles.module.css'
import { LinkContainer } from '../LinkContainer'
import { LinkCard } from '../LinkCard'

export const App = () => (
    <div className={styles.app}>
      <LinkContainer>
        <LinkCard />
      </LinkContainer>
    </div>
)
