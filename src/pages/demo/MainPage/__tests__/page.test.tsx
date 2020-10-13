import React from 'react'
import { appRender, act } from 'src/tests/utils'
import Home from 'pages'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {
        skip: '0',
        first: '3',
      },
      asPath: '',
    }
  },
}))

describe('Home page', () => {
  if (process.env.TEST_REAL_API === 'true') {
    it('Render Home page', async () => {
      const tree = await appRender(<Home />)

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for response
      })

      // console.log('tree', tree.container.outerHTML);

      expect(
        tree.container.querySelectorAll('#comments > .comment').length
      ).toBe(3)
    })
  } else {
    it('Passet. For execution set env TEST_REAL_API=true', () =>
      expect(1).toBe(1))
  }
})
