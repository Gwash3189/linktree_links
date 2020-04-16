import React from 'react'
import styles from './index.module.css'

export interface HelloProps { name: string }
export const greeting = (name: string) => `Hello, ${name}`
export const Hello = ({ name }: HelloProps) => <div className={styles.name}>{greeting(name)}</div>
