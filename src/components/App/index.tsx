import React from 'react'

import styles from './styles.module.css'
import { LinkContainer } from '../LinkContainer'
import { LinkCard } from '../LinkCard'
import { links, userData, stylesData } from './state'
import { UserDataProvider } from '../../context/user-context'
import { StylesProvider } from '../../context/styles-context'

export const App = () => (
  <div className={styles.app}>
    <StylesProvider stylesData={stylesData}>
      <UserDataProvider userData={userData}>
        <LinkContainer>
          <LinkCard links={links.classic}/>
          <LinkCard links={links.show}/>
        </LinkContainer>
      </UserDataProvider>
    </StylesProvider>
  </div>
)
