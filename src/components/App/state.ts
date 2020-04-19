import { PreloadedLinks } from './types'
import { LinkType, MusicPlatform } from '../Tree/types'
import { UserData } from '../../context/user-context'
import { avatar } from './avatar-state'
import { StylesData } from '../../context/styles-context'

export const stylesData: StylesData = {
  backgroundColour: '#39e09b',
  textColor: '#263238',
}

export const userData: UserData = {
  username: '@cordellcrust',
  avatar,
}

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
      text: 'Upcoming Gigs',
    },
    {
      href: '#',
      children: 'New Link',
      type: LinkType.classic,
    },
  ],
  music: [
    {
      type: LinkType.music,
      text: 'Demo',
      thumbnail: '',
      songName: 'Untitled',
      artistName: 'Cordell',
      platforms: [{
        platform: MusicPlatform.bandcamp,
        href: '',
      }],
    },
  ],
}
