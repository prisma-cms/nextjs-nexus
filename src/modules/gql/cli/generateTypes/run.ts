import { generate } from './generateTypes'

generate().catch((err: Error) => {
  console.error(
    'Во время генерации схемы произошла ошибка',
    err.name,
    err.message
  )
  process.exit(1)
})
