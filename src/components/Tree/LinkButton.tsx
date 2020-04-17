import React from 'react'
import styles from './styles.module.css'

type Props = {
  link: string,
  children: string
}

// TODO
// I chose to use a button here purely based on
// how the end product looks.
// However, given that the main interaction is
// navigation, it could be argued that an <a />
// element should be used

// It could also be argued that screen readers
// could interact with <a /> tags a little different than buttons

export const LinkButton = (props: Props) => {
  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    window.open(props.link, '_blank')
  }

  return (
    <div className={styles.container}>
      <button onClick={onClickHandler} className={styles.button}>
        {props.children}
      </button>
    </div>
  )
}
