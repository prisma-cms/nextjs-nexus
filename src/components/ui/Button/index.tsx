// eslint-disable-next-line no-restricted-imports
// export { default } from '@prisma-cms/ui/dist/Button'
// eslint-disable-next-line no-restricted-imports
// export * from '@prisma-cms/ui/dist/Button'

import dynamic from 'next/dynamic'
const Button = dynamic(import('@prisma-cms/ui/dist/Button'), { ssr: false })

const ButtonLasy: typeof Button = (props) => {
  return <Button {...props} />
}

export default ButtonLasy
