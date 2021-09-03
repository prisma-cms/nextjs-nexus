import { useContext } from 'react'
import { Context } from 'src/pages/_App/Context'

/**
 * Get current authorized user
 */
export const useCurrentUser = () => {
  const context = useContext(Context)

  return context?.user
}
