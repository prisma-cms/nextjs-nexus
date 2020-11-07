import React from 'react'
import { appRender } from 'src/tests/utils'
import MainPage from '..'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
    }
  },
}))

describe('MainPage', () => {
  it('Render MainPage', () => {
    const tree = appRender(<MainPage />)

    // eslint-disable-next-line no-console
    // console.log('MainPage tree', tree.container.outerHTML);

    expect(tree.container).toMatchSnapshot()
  })
})
