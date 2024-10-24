import { shield } from 'graphql-shield'
import { Rule } from 'graphql-shield/dist/rules'
import { NexusGenFieldTypes } from '../../nexus/generated/nexus'
import { isAuthenticated } from './rules/isAuthenticated'
import { isSudo } from './rules/isSudo'
// import { isOwner } from './rules/isOwner'

type RuleTree<K extends NexusGenFieldTypes> = {
  // TODO Fix types
  // @ts-expect-error types
  [P in keyof K]?: RuleTreeRule<K[P]> | Rule
}

// https://github.com/microsoft/TypeScript/issues/15300
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RuleTreeRule<K extends Record<string, any>> = {
  [P in keyof K]?: Rule
}

const ruleTree: RuleTree<NexusGenFieldTypes> = {
  Query: {
    // me: isAuthenticated,
  },
  Mutation: {
    blockUser: isSudo,
    unblockUser: isSudo,
    updateOneUser: isSudo,
    updateCurrentUser: isAuthenticated,
  },
}

export const permissions = shield(ruleTree, {
  /**
   * Allow use new Error() in resolvers
   */
  allowExternalErrors: true,
})
