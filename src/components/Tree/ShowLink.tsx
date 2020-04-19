import React, { useState, Fragment } from 'react'

import { ButtonLink } from './ButtonLink'
import BySongKick from '../../svgs/bySongKick.svg'
import styles from './styles.module.css'
import {
  ShowDefinition,
} from './types'

type Props = {
  shows: Array<ShowDefinition>,
  text: string
}

const renderShows = (details: Array<ShowDefinition>) => {
  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault()
  }


  const render = (show: ShowDefinition, index: number) => {
    const soldOutContent = show.soldOut ? 'Sold Out' : '>'
    const soldOutClass = show.soldOut ? styles.soldOutText : styles.showArrow

    return (
      <div key={index} className={styles.showContentContainer} onClick={handleOnClick}>
        <div className={`${styles.showContent} ${styles.showBorder}`}>
          <div className={styles.showInformation}>
            <p className={styles.showDate}>
              {show.date}
            </p>
            <p className={styles.showLocation}>
              {show.location}
            </p>
          </div>
          <div className={soldOutClass}>
            <p>
              {soldOutContent}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.showContentPadding}>
      {details.map(render)}
      <div className={styles.songKickContainer}>
        <div className={styles.songKickContent}>
          <BySongKick />
        </div>
      </div>
    </div>
  )
}

export const ShowLink = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  const buttonStyles = isOpen ? styles.showButtonActive : styles.showButton
  const containerStyles = isOpen ? styles.showButtonContainerOpen : styles.showButtonContainerClosed

  return (
    <Fragment>
      <div className={containerStyles}>
        <ButtonLink className={buttonStyles} onClick={onClickHandler}>
          {props.text}
        </ButtonLink>
      </div>
      {isOpen && renderShows(props.shows)}
    </Fragment>
  )
}
