import React from 'react'
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
}

export const LinkDisplay = (props: Props) => (
  <div className={styles.linkDisplay}>
    { props.children }
  </div>
)
