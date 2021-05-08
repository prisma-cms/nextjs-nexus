import styled from 'styled-components'

import { ButtonStyled } from '@prisma-cms/ui/dist/Button/styles'
import {
  FormControlStyled,
  FormControlElementStyled,
} from '@prisma-cms/ui/dist/form/FormControl/styles'

export const FormStyled = styled.form`
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
`
