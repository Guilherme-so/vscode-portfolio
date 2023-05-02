import 'styled-components';

import Dracula from './dracula'

export type ITheme = typeof Dracula

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}