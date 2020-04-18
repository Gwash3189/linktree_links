import { ClassicLinkDefinition, ShowLinkDefinition } from '../Tree/types'

export type PreloadedLinks = {
  classic: Array<ClassicLinkDefinition>,
  show: Array<ShowLinkDefinition | ClassicLinkDefinition>
}
