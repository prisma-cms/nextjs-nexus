import { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'

import App from 'pages/_app'

// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const AppProvider: React.FC = ({ children }: any, pageProps: any) => {
  return <App Component={() => children} pageProps={pageProps} />

  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

/**
 * Renderer for App components
 */
export const appRender = (ui: ReactElement) => {
  return render(ui, { wrapper: AppProvider }) as RenderResult
}

// re-export everything
export * from '@testing-library/react'
