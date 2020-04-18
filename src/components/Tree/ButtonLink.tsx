import React, { ReactNode, MouseEvent } from 'react'
import styles from './styles.module.css'

type Props = {
  onClick: (event: MouseEvent) => void,
  children: ReactNode,
  className?: string
}

// TODO
// I chose to use a button here purely based on
// how the end product looks.
// However, given that the main interaction is
// navigation, it could be argued that an <a />
// element should be used

// It could also be argued that screen readers
// could interact with <a /> tags a little different than buttons

export const ButtonLink = (props: Props) => (
  <button onClick={props.onClick} className={props.className || styles.button}>
    {props.children}
  </button>
)
