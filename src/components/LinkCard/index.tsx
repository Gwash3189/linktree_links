import React, { Fragment } from 'react'

import { LinkDisplay } from '../LinkDisplay'
import { Profile } from '../Profile'
import { Tree } from '../Tree'
import { Logo } from '../Logo'


const links = [
  {
    href: '#',
    text: 'New Link',
  },
  {
    href: '#',
    text: 'Another Link',
  },
  {
    href: '#',
    text: 'One More Link',
  },
  {
    href: '#',
    text: 'Fourth Link',
  },
  {
    href: '#',
    text: 'Fifth Link',
  },
  {
    href: '#',
    text: 'Link Strikes Again',
  },
]

export const LinkCard = () => (
  <Fragment>
    <LinkDisplay>
      <Profile />
      <Tree links={links}/>
      <Logo />
    </LinkDisplay>
  </Fragment>
)
