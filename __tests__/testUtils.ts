import { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: React.FC = ({ children }) => {
  return children as any
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui: ReactElement) => {
  return render(ui, { wrapper: Providers }) as RenderResult
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
