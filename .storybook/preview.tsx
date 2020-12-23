import { addDecorator } from '@storybook/react';
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'
import { makeDecorator } from '@storybook/addons';
import { linkTo } from '@storybook/addon-links'

import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { MittEmitter } from 'next/dist/next-server/lib/mitt';

import '../src/styles/styles.scss';

export const parameters = {
  options: {
    storySort: (a: any, b: any) => {
      // We want the Welcome story at the top
      if (b[1].kind === 'Welcome') {
        return 1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
}

const startCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

addDecorator(makeDecorator({
  name: 'withSomething',
  parameterName: 'something',
  wrapper: (storyFn, context) => {
    return <ThemeProvider theme={theme}>
      {/* 
        https://github.com/vercel/next.js/issues/15543#issuecomment-664955766
      */}
      <RouterContext.Provider
        value={{
          route: "/",
          pathname: '/',
          asPath: '/',
          query: {},
          basePath: '',
          push: (_url, as) => {
            if (as) {
              linkTo('Routes', as !== '/' ? startCase(as.toString()) : 'Index')()
            }
            return Promise.resolve(true)
          },
          replace: (_url, as) => {
            if (as) {
              linkTo('Routes', as !== '/' ? startCase(as.toString()) : 'Index')()
            }
            return Promise.resolve(true)
          },
          reload: () => { },
          prefetch: async () => { },
          back: () => { },
          beforePopState: () => { },
          isFallback: false,
          events: {} as MittEmitter,
        }}
      >
        {storyFn(context)}
      </RouterContext.Provider>
    </ThemeProvider>
  }
}));
