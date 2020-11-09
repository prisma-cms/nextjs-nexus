import React from 'react'
import { render } from 'src/tests/utils'
import Component from '..'

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

describe('404 Error page', () => {
  it('Render 404 Error page', () => {
    const tree = render(<Component />)

    const head = tree.baseElement.parentElement?.firstChild as HTMLHeadElement

    expect(head).toMatchSnapshot()
    expect(tree.baseElement.parentNode).toMatchSnapshot()

    expect(
      head
        .querySelector('meta[name=robots]')
        ?.attributes.getNamedItem('content')?.value
    ).toBe('noindex,follow')

    expect(
      head
        .querySelector('meta[name=googlebot]')
        ?.attributes.getNamedItem('content')?.value
    ).toBe('noindex,follow')
  })
})
