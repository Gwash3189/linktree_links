import React from 'react'
// TODO
// I've chosen to put all "external" libraries at the top of files
// and all of the internal stuff lower down, spaced by one new line.
// I feel this creates an easy to read distinction of what is ours
// and what is theirs
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
