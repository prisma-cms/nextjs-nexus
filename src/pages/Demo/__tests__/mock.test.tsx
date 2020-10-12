import React from 'react'
import { render } from 'src/tests/utils'
import Home from 'pages'
import { PostsQuery } from 'src/modules/gql/generated'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {
        skip: '0',
        first: '2',
      },
      asPath: '',
    }
  },
}))

jest.mock('@apollo/client/react/hooks', () => {
  return {
    useQuery: (query: any) => {
      // ... some logic to decide which query has been requested.

      // console.log('mock useQuery query', JSON.stringify(query, undefined, 2));
      // console.log('mock useQuery options', options);

      let data

      switch (query.definitions[0].name.value) {
        case 'posts':
          data = {
            allPosts: [
              {
                id: '1',
                title: 'Test',
                url: 'https://test.local',
              },
              {
                id: '2',
                title: 'Test',
                url: 'https://test.local',
              },
            ],
            _allPostsMeta: {
              count: 100,
            },
          } as PostsQuery

          break
      }

      return {
        loading: false,
        error: null,
        // data: require('./some_mock_query_data').default,
        data,
      }
    },
  }
})

describe('Home page', () => {
  it('Render Home page', async () => {
    const tree = await render(<Home />)

    // console.log('tree', tree.container.outerHTML);

    expect(tree.container.querySelectorAll('#posts > .post').length).toBe(2)
  })
})
