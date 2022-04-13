import React from 'react'
import { appRender } from 'src/tests/utils'
import Button from '..'

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

describe('Button', () => {
  it('Render Button', () => {
    const tree = appRender(<Button />)

    expect(tree.baseElement).toMatchSnapshot()
    expect(tree.container).toMatchSnapshot()
  })
})
