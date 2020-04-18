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

const renderClassicLink = (item: ClassicLinkDefinition, index: number) => (
  <ClassicLink key={index} link={item.href}>
    {item.children}
  </ClassicLink>
)

const renderShowLink = (item: ShowLinkDefinition, index: number) => (
  <ShowLink key={index} shows={item.shows} />
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
