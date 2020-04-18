import React, { ReactNode } from 'react'

import styles from './styles.module.css'
import { ButtonLink } from './ButtonLink'

type Props = {
  link: string,
  children: ReactNode
}

export const ClassicLink = (props: Props) => {
  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    window.open(props.link, '_blank')
  }

  return (
    <div className={styles.container}>
      <ButtonLink onClick={onClickHandler}>
        {props.children}
      </ButtonLink>
    </div>
  )
}
