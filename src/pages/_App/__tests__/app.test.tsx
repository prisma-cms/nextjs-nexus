import React from 'react'
import { baseRender } from 'src/tests/utils'
import App from '..'

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

const Component: React.FC = ({ children }) => {
  return <div id="test">Text {children}</div>
}

// TODO: cover App.getInitialProps()
describe('App', () => {
  it('Render App', () => {
    const tree = baseRender(
      <App
        Component={Component}
        pageProps={{
          children: 'Some content',
        }}
      />
    )

    expect(tree.baseElement).toMatchSnapshot()
    expect(tree.container).toMatchSnapshot()
  })
})
