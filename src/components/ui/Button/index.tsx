// eslint-disable-next-line no-restricted-imports
// export { default } from '@prisma-cms/ui/dist/Button'
// eslint-disable-next-line no-restricted-imports
// export * from '@prisma-cms/ui/dist/Button'

import dynamic from 'next/dynamic'
const ButtonProto = dynamic(import('@prisma-cms/ui/dist/Button'), {
  ssr: false,
})

const Button: typeof ButtonProto = (props) => {
  return ButtonProto ? <ButtonProto {...props} /> : null
}

export default Button
