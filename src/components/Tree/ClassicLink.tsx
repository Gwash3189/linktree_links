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
    // TODO
    // I remember there being some security concerns with using "_blank"
    // if this was production, I would research that and check that it was
    // OK to do, before commiting.
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
