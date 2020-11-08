import { ReactElement, useMemo } from 'react'
import { render as baseRender, RenderResult } from '@testing-library/react'

import App from 'pages/_app'
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'

// For handle css
import 'jest-styled-components'

/**
 * Mock html head
 * https://github.com/vercel/next.js/discussions/11060
 */
jest.mock('next/head', () => {
  const ReactDOMServer = require('react-dom/server')
  return {
    __esModule: true,
    default: ({
      children,
    }: {
      children: Array<React.ReactElement> | React.ReactElement | null
    }) => {
      if (children) {
        global.document.head.insertAdjacentHTML(
          'afterbegin',
          ReactDOMServer.renderToString(children) || ''
        )
      }
      return null
    },
  }
})

/**
 * Base renderer from @testing-library/react
 */
export { baseRender }

// re-export everything
export * from '@testing-library/react'

/**
 * Renderer with main App
 */
const AppProvider: React.FC = ({ children }: any, pageProps: any) => {
  const Component = useMemo(() => {
    return () => children
  }, [children])

  return <App Component={Component} pageProps={pageProps} />
}
export const appRender = (ui: ReactElement) => {
  return baseRender(ui, { wrapper: AppProvider }) as RenderResult
}

/**
 * Renderer with Theme
 */
const WithThemeProvider: React.FC = ({ children }: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
export const render = (ui: ReactElement) => {
  return baseRender(ui, { wrapper: WithThemeProvider }) as RenderResult
}
