import styled, { css } from 'styled-components'

// eslint-disable-next-line no-restricted-imports
import { ButtonStyled } from '@prisma-cms/ui/dist/Button/styles'
import {
  FormControlStyled,
  FormControlElementStyled,
} from '@prisma-cms/ui/dist/form/FormControl/styles'

type FormStyledProps = {
  layout: 'column' | 'default'
}

export const FormStyled = styled.form<FormStyledProps>`
  input[type='checkbox'] {
    cursor: pointer;
  }

  ${ButtonStyled} {
    margin: 15px;
  }

  ${FormControlStyled} {
    &.flex-row {
      ${FormControlElementStyled} {
        display: flex;
        align-items: center;

        > *:first-child {
          /* flex: 1; */
          width: auto;
          margin-right: 5px;
        }
      }
    }
  }

  ${({ layout }) => {
    switch (layout) {
      case 'column':
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        `
    }
  }}
`
