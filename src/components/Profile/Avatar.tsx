import React from 'react'

import styles from './styles.module.css'

type Props = {
  src: string
}

export const Avatar = (props: Props) => (
    <img className={styles.image} src={props.src} />
)
