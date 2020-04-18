import { ReactNode } from 'react'

// TODO
// This enum allows me to safely switch based up on the
// links configured type

export enum LinkType {
  classic = 'classic',
  show = 'show',
  music = 'music'
}

export const isLinkType = (link: LinkDefinition, type: LinkType) => link.type === type

// Todo
// I've chosen to use interfaces here as they allow
// for interitance. This allows me to achieve some polymorphism
// with the types of things that get rendered into a LinkButton

export interface LinkDefinition {
  type: LinkType
}

export interface ClassicLinkDefinition extends LinkDefinition {
  href: string,
  children: string | ReactNode
}

export interface ShowDefinition {
  date: string,
  location: string,
  soldOut: boolean
}

export interface ShowLinkDefinition extends LinkDefinition {
  shows: Array<ShowDefinition>
}
