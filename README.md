# @prisma-cms/nextjs Typescript Boilerplate

### Based on

- https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest
- https://github.com/vercel/next.js/tree/canary/examples/with-apollo
- https://github.com/vercel/next.js/tree/canary/examples/custom-server-typescript

Bootstrap a developer-friendly NextJS app configured with:

- Support custom GraphQL API endpoints.
- Frontend GraphQL API schema and types generation.
- [Typescript](https://www.typescriptlang.org/) and [server](https://github.com/TypeStrong/ts-node)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/prisma-cms/nextjs)

## How to use

```bash
# Clone project
git clone https://github.com/prisma-cms/nextjs.git

# Install dependencies
yarn install

# Build bundles
yarn build

# Start bundled project
yarn start
```

## Development

@prisma-cms/nextjs support custom GrapghQL API endpoints. By default used https://nextjs-graphql-with-prisma-simple.vercel.app/api.

1. In root of project create .env file (dot is necessary in start of filename).
2. Added line with your GraphQL API endpoint address e.g.
   API_ENDPOINT=https://api.prisma-cms.com
3. Generate front GraphQL schema and types

```bash
yarn generate:types
```

4. Start server in development mode

```bash
yarn dev
```

## Tests

### Eslint

```bash
yarn lint
```

### TS

```
yarn types
```

### Jest unit tests

```
yarn test
```

### Jest unit tests real API

**Attension!** For unit tests with real API started server required.

```bash
# Build bundles
yarn build

# Start bundled project
yarn start
```

After this open yet another terminal and run tests

```bash
yarn test:api
```

### Run all test

```bash
yarn test:all
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
