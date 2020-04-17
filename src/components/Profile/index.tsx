import React from 'react'
import styles from './styles.module.css'

import { Avatar } from './Avatar'

export const Profile = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <Avatar />
    </div>
    <div className={styles.row}>
      <p className={styles.username}>
        @cordellcrust
      </p>
    </div>
  </div>
)
