import React from 'react'

type Props = {
  children: React.ReactNode,
  className: string
}

// TODO
// I created this to DRY up the usage of styled container `div`s

export const Container = (props: Props) => (
  <div className={props.className}>
    { props.children }
  </div>
)
