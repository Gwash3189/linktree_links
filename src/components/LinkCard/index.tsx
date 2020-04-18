import React, { Fragment } from 'react'

import { LinkDisplay } from '../LinkDisplay'
import { Profile } from '../Profile'
import { Tree } from '../Tree'
import { Logo } from '../Logo'
import { LinkDefinition } from '../Tree/types'

type Props = {
  links: Array<LinkDefinition>
}

export const LinkCard = (props: Props) => (
  <Fragment>
    <LinkDisplay>
      <Profile />
      <Tree links={props.links}/>
      <Logo />
    </LinkDisplay>
  </Fragment>
)
