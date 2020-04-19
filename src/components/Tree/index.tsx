import React, { Fragment } from 'react'

import { ClassicLink } from './ClassicLink'
import { ShowLink } from './ShowLink'
import {
  LinkDefinition,
  ClassicLinkDefinition,
  ShowLinkDefinition,
  LinkType,
  isLinkType,
} from './types'

type Props = {
  links: Array<LinkDefinition>
}

// TODO
// Normally I wouldn't assign the key of a component
// to an index in an array. This can can cause problems
// if the elements shift, then it can cause unnecessary
// re-renders

// TODO
// This directory is getting really noisy.
// If this was a production level codebase, I would clean it up.
// I would separate "Show" related links out into their own sub-directory
// I would also move all "Show" styles out into their own `styles.module.css` file


const renderClassicLink = (item: ClassicLinkDefinition, index: number) => (
    <ClassicLink key={index} link={item.href}>
      {item.children}
    </ClassicLink>
)

const renderShowLink = (item: ShowLinkDefinition, index: number) => (
  <ShowLink key={index} {...item} />
)

export const Tree = (props: Props) => (
  <Fragment>
    {props.links.map((definition: LinkDefinition, index) => {
      if (isLinkType(definition, LinkType.classic)) {
        return renderClassicLink(definition as ClassicLinkDefinition, index)
      }

      return renderShowLink(definition as ShowLinkDefinition, index)
    })}
  </Fragment>
)
