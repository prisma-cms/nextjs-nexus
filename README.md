# @prisma-cms/nextjs Typescript Boilerplate

### Based on

- https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest
- https://github.com/vercel/next.js/tree/canary/examples/with-apollo
- https://github.com/vercel/next.js/tree/canary/examples/custom-server-typescript

Bootstrap a developer-friendly NextJS app configured with:

- TypeScript CRUD API with [prisma-2](https://www.prisma.io/) and [nexus-js](https://nexusjs.org/)
- Frontend GraphQL API schema and types generation.
- [styled-components](https://styled-components.com/) AND [SASS/SCSS](https://sass-lang.com/).
- [Typescript](https://www.typescriptlang.org/) and [server](https://github.com/TypeStrong/ts-node)
- Linting with [ESLint](https://eslint.org/)
- [Storybook](https://storybook.js.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/prisma-cms/nextjs)

## How to use

```bash
# Clone project
git clone https://github.com/prisma-cms/nextjs-nexus.git

# Install dependencies
yarn install

# Clone and edit .env file
cp .env.sample .env

# Deploy database migrations (set MySQL connection credentioals in .env file)
yarn prisma:deploy

# Build bundles
yarn build

# Start bundled project
yarn start
```

## Development

1. Edit prisma shema in prisma/schema.prisma

2. Push change to database

```bash
yarn prisma:db:push
```

3. Create migration

```bash
yarn prisma:migrate:create --name migration_name
```

5. Generate front GraphQL schema and types

```bash
yarn generate:types
```

6. Start server in development mode

```bash
yarn dev
```

## Tests

### Eslint

```bash
yarn lint
```

### Typescript types checking

```bash
yarn types
```

### Jest unit tests

```bash
yarn test
```

### Test code coverage

```bash
yarn test --coverage
```

### Jest unit tests real API

**Attension!** For unit tests with real API started server required.

## Build

1. Generate schemas if changed

```bash
yarn generate
```

2. Build bundles

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

### Analyze bundles

```bash
yarn build:analyze
```

### Storybook

#### dev

```bash
yarn storybook
```

#### build storybook

```bash
yarn build:storybook
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
