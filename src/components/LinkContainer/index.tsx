import React from 'react'
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
}

export const LinkContainer = (props: Props) => (
  <div className={styles.linkContainer}>
    { props.children }
  </div>
)
