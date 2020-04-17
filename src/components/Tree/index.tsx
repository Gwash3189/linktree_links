import React, { Fragment } from 'react'

import { LinkButton } from './LinkButton'

type LinkDefinition = {
  href: string,
  text: string
}

type Props = {
  links: Array<LinkDefinition>
}

// TODO
// Normally I wouldn't assign the key of a component
// to an index in an array. This can can cause problems
// if the elements shift, then it can cause unnecessary
// re-renders

export const Tree = (props: Props) => (
  <Fragment>
    {props.links.map((definition, index) => (
      <LinkButton key={index} link={definition.href}>
        {definition.text}
      </LinkButton>
    ))}
  </Fragment>
)
