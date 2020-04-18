import { PreloadedLinks } from './types'
import { LinkType } from '../Tree/types'

export const links: PreloadedLinks = {
  classic: [
    {
      href: '#',
      children: 'New Link',
      type: LinkType.classic,
    },
    {
      href: '#',
      children: 'Another Link',
      type: LinkType.classic,
    },
    {
      href: '#',
      children: 'One More Link',
      type: LinkType.classic,
    },
    {
      href: '#',
      children: 'Fourth Link',
      type: LinkType.classic,
    },
    {
      href: '#',
      children: 'Fifth Link',
      type: LinkType.classic,
    },
    {
      href: '#',
      children: 'Link Strikes Again',
      type: LinkType.classic,
    },
  ],
  show: [
    {
      shows: [
        {
          date: 'April 01 2019',
          location: 'The Forum, Melbourne',
          soldOut: false,
        },
        {
          date: 'April 02 2019',
          location: 'The Bendigo Hotel, Melbourne',
          soldOut: true,
        },
      ],
      type: LinkType.show,
    },
    {
      href: '#',
      children: 'New Link',
      type: LinkType.classic,
    },
  ],
}
