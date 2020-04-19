import React from 'react'
import styles from './styles.module.css'

import { useUserData } from '../../context/user-context'
import { Avatar } from './Avatar'

export const Profile = () => {
  const [userData] = useUserData()

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Avatar src={userData.avatar}/>
      </div>
      <div className={styles.row}>
        <p className={styles.username}>
          {userData.username}
        </p>
      </div>
    </div>
  )
}
