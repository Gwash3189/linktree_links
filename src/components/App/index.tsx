import React from 'react'

import styles from './styles.module.css'
import { LinkContainer } from '../LinkContainer'
import { LinkCard } from '../LinkCard'
import { links } from './state'


export const App = () => (
    <div className={styles.app}>
      <LinkContainer>
        <LinkCard links={links.classic}/>
        <LinkCard links={links.show}/>
      </LinkContainer>
    </div>
)
