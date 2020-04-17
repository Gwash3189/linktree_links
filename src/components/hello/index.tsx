import React, { Fragment } from 'react'
import styles from './index.module.css'
import SpotifyIcon from '../svgs/spotify.svg'

export interface HelloProps { name: string }
export const greeting = (name: string) => `Hello, ${name}`
export const Hello = ({ name }: HelloProps) => (
    <Fragment>
      <div className={styles.name}>{greeting(name)}</div>
      <SpotifyIcon />
    </Fragment>
)
