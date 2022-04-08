import styled, { css } from 'styled-components'

import { ButtonStyled } from '@prisma-cms/ui/dist/Button/styles'
import {
  FormControlStyled,
  FormControlElementStyled,
} from '@prisma-cms/ui/dist/form/FormControl/styles'

type FormStyledProps = {
  layout: 'inline' | 'default'
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
      case 'inline':
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `
    }
  }}
`
