import { useCallback, useContext, useMemo } from 'react'
import { Context } from 'src/pages/_App/Context'
import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import Button from 'src/components/ui/Button'
import {
  ResetPasswordProcessorMutationVariables,
  useResetPasswordProcessorMutation,
} from 'src/modules/gql/generated'
import { ResetPasswordFormStyled } from '../styles'
import TextField from '@prisma-cms/ui/dist/form/TextField'

export type ResetPasswordCodeProps = {
  data: {
    where: ResetPasswordProcessorMutationVariables['where']['User']
  }
  cancel: () => void
}

type FormData = Pick<ResetPasswordProcessorMutationVariables['where'], 'code'>

export const ResetPasswordCode: React.FC<ResetPasswordCodeProps> = ({
  data: { where },
  cancel,
}) => {
  const context = useContext(Context)

  const schema = useMemo(() => {
    const schema: SchemaOf<FormData> = yup
      .object({
        code: yup.string().required(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  })

  const [mutation, { loading }] = useResetPasswordProcessorMutation()

  const onSubmit = handleSubmit((data) => {
    if (loading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    mutation({
      variables: {
        where: {
          User: where,
          code: data.code,
        },
      },
    })
      .then((r) => {
        if (r.data?.response.success) {
          context?.onAuthSuccess(r.data.response)
          // codeSetter('')
        } else {
          alert(r.data?.response.message || 'Ошибка выполнения запроса')
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  const codeFieldRender: ControllerProps<FormData, 'code'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Код"
          error={formState.errors[field.name]}
          {...field}
          value={field.value || ''}
          fullWidth
        />
      )
    }, [])

  return (
    <ResetPasswordFormStyled role="signin" onSubmit={onSubmit} layout="column">
      <h2>Введите код</h2>

      <Controller
        name="code"
        control={control}
        defaultValue={''}
        render={codeFieldRender}
      />

      <div
        style={{
          display: 'flex',
        }}
      >
        <Button size="small" type="button" variant="default" onClick={cancel}>
          Отмена
        </Button>

        <Button size="small" type="submit" disabled={loading} variant="success">
          Подтвердить
        </Button>
      </div>
    </ResetPasswordFormStyled>
  )
}
