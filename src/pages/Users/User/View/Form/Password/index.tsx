import { ChangeEvent, useCallback, useState } from 'react'
import TextField from '@prisma-cms/ui/dist/form/TextField'
import Button from 'src/components/ui/Button'

type NewPasswordProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const NewPassword: React.FC<NewPasswordProps> = ({
  value,
  onChange,
}) => {
  const [opened, openedSetter] = useState(false)

  const open = useCallback(() => {
    openedSetter(true)
  }, [])

  return opened ? (
    <TextField
      title="Новый пароль"
      name="password"
      type="password"
      value={value}
      onChange={onChange}
    />
  ) : (
    <Button onClick={open} fullWidth>
      Новый Пароль
    </Button>
  )
}
