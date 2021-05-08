import { shield } from 'graphql-shield'

// import { isAuthenticated } from "./rules/is-authenticated";

// const rules = {
//   users: isAuthenticated,
// };

export const permissions = shield({
  Query: {
    // users: rules.users,
  },
  Mutation: {},
})
