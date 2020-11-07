import React from 'react'
import { action } from '@storybook/addon-actions'

import { Meta } from '@storybook/react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'
import styled from 'styled-components'

type ButtonProps = {
  text: string
  backgroundColor?: string
}

type ButtonStyledProps = {
  backgroundColor?: string
}

const Button = styled.button<ButtonStyledProps>`
  border-radius: 3px;
  border: 2px solid grey;

  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color, theme }) => color || theme.colors.primary};

  &:hover {
    border-color: 1px solid green;
  }

  &:active {
    border-color: 1px solid red;
  }
`

const title = 'Button'

export const withText: React.FC<ButtonProps> = (props) => {
  const { text, backgroundColor = 'white', ...other } = props

  return (
    <Button
      {...other}
      onClick={action('clicked')}
      backgroundColor={backgroundColor}
    >
      {text}
    </Button>
  )
}

export const withSomeEmoji: React.FC<ButtonProps> = (props) => (
  <Button {...props} onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

const args: Partial<ButtonProps> = {
  text: 'Hello Button',
}

export default {
  title,
  component: withText,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
  args,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>{title}</Title>
          <Subtitle></Subtitle>
          <Description></Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta
