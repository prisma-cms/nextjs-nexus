import React from 'react'
import { render } from 'src/tests/utils'
import Home from 'pages'
import { CommentsConnectionQuery } from 'src/modules/gql/generated'

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

      let data: CommentsConnectionQuery | null = null

      // console.log('query.definitions[0].name.value', query.definitions[0].name.value);

      /**
       * Формируем данные ориентируясь на имя запроса
       */
      switch (query.definitions[0].name.value) {
        case 'commentsConnection':
          data = {
            commentsConnection: {
              edges: [
                {
                  node: {
                    id: 'ckfdz5d85q16a0800f34ym0aq',
                    createdAt: '2020-09-22T13:08:34.229Z',
                    contentText:
                      'Я уже сейчас так наверняка не скажу, но скорее всего это реализация для использования в процессорах. Во всяком случае в нашем form-процессоре использовалась точно: https://github.com/MODX-Club/modxSite/blob/master/core/components/modxsite/processors/site/web/form.class.php Больше ничего не подскажу, давно уже с MODX не работаю.',
                    CreatedBy: {
                      id: 'cjoe87z9f001b0d9683ysg0m4',
                      username: 'Fi1osof',
                      fullname: 'Николай',
                      image: '9da9e7e309fd4e77cf42c02a7a42142e.jpeg',
                      __typename: 'User',
                    },
                    __typename: 'Resource',
                  },
                  __typename: 'ResourceEdge',
                },
                {
                  node: {
                    id: 'ckfdygdfipyd30800jvndzlv2',
                    createdAt: '2020-09-22T12:49:08.093Z',
                    contentText:
                      'Ну вот всё поставил как в статье. Картbнка каптчи да появляется но форма отправляется не зависимо вписываю я код с картинки или нет хотя &preHooks=`modcaptcha.preHook` &captcha_key=`mycaptcha` стоят на вызове сниппета... Сниппет AjaxForm вызываю с Formit.',
                    CreatedBy: {
                      id: 'ckfdxq6u6pvc80800n4w9lial',
                      username: '1234567',
                      fullname: '234723',
                      image: null,
                      __typename: 'User',
                    },
                    __typename: 'Resource',
                  },
                  __typename: 'ResourceEdge',
                },
                {
                  node: {
                    id: 'ckfdy1mbkpwug0800qwip8p8y',
                    createdAt: '2020-09-22T12:37:39.775Z',
                    contentText:
                      'В статье, вроде, информации достаточно в статье. Просто устанавливается компонент и чанк вставляется. Но все было давно, сейчас не знаю на сколько это все работоспособное.',
                    CreatedBy: {
                      id: 'cjoe87z9f001b0d9683ysg0m4',
                      username: 'Fi1osof',
                      fullname: 'Николай',
                      image: '9da9e7e309fd4e77cf42c02a7a42142e.jpeg',
                      __typename: 'User',
                    },
                    __typename: 'Resource',
                  },
                  __typename: 'ResourceEdge',
                },
              ],
              aggregate: {
                count: 9282,
                __typename: 'AggregateResource',
              },
              __typename: 'ResourceConnection',
            },
          }

          break
      }

      // console.log('data', data);

      return {
        loading: false,
        error: null,
        data,
      }
    },
  }
})

describe('Home page', () => {
  it('Render Home page', async () => {
    const tree = await render(<Home />)

    // console.log('tree', tree.container.outerHTML);

    expect(tree.container.querySelectorAll('#comments > .comment').length).toBe(
      3
    )
  })
})
