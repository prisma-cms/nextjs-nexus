import 'src/tests/utils'

import { generate } from '../generateTypes'

describe('GraphQL Module', () => {
  it('Generate types', async () => {
    if (process.env.TEST_REAL_API === 'true') {
      // Prevent error Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Timeout
      // Set timeout 5 minutes
      jest.setTimeout(5 * 60 * 1000)

      await generate()
    } else {
      // eslint-disable-next-line no-console
      console.info(
        'Skipped. To run this test pass TEST_REAL_API=true env or run yarn test:api'
      )
      expect(1).toEqual(1)
    }
  })
})
