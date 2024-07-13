import type { Preview } from '@storybook/react'
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      )
    },
  ],
}

export default preview
