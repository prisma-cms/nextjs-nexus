import React from 'react'
import { baseRender } from 'src/tests/utils'
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

describe('Error page', () => {
  it('Render Error page', () => {
    const tree = baseRender(<Component title="Test error" statusCode={401} />)

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