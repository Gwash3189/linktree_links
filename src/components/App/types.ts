import { ClassicLinkDefinition, ShowLinkDefinition, MusicLinkDefinition } from '../Tree/types'

export type PreloadedLinks = {
  classic: Array<ClassicLinkDefinition>,
  show: Array<ShowLinkDefinition | ClassicLinkDefinition>,
  music: Array<MusicLinkDefinition>
}
