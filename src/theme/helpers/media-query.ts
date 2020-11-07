import { DefaultTheme, css } from 'styled-components'
import theme from '..'

export type BreakpointsKey = keyof typeof theme['breakpoints']

export type MinWidth = Record<BreakpointsKey, (args: any) => any>

// TODO: Проработать типы https://github.com/styled-components/styled-components/issues/430
// TODO: добавить поддержу функций внутри шаблонов, чтобы можно было писать ${({theme}) => ...}
/**
 * @media(min-width)...
 */
export const minWidth = Object.keys(theme['breakpoints']).reduce(
  (accumulator, _label) => {
    const label = _label as BreakpointsKey
    accumulator[label] = (args: (theme: DefaultTheme) => string | string) => {
      let cssString = ''

      /**
       * Если передана функция, выполняем как функцию
       */
      if (typeof args === 'function') {
        cssString = args(theme)
      } else {
        cssString = args
      }

      return css`
        @media (min-width: ${theme['breakpoints'][label]}px) {
          ${cssString};
        }
      `
    }
    return accumulator
  },
  {} as MinWidth
)
