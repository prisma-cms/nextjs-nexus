import { objectType } from 'nexus'

export const RequestError = objectType({
  name: 'RequestError',
  description: 'Объект ошибки',
  definition(t) {
    t.nonNull.string('key')
    t.nonNull.string('message')
  },
})
