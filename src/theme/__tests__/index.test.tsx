import React from 'react'
import { render } from 'src/tests/utils'
// import render from 'react-test-renderer'
import styled, { DefaultTheme } from 'styled-components'
import theme from '..'
import { minWidth } from '../helpers'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
    }
  },
}))

const border = '1px solid green'

const DivStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  ${minWidth.sm`
    padding: 10px;
  `}

  /* TODO: Fix types */
  ${minWidth.lg(
    (theme: DefaultTheme) => `
    color: ${theme.colors.primary};
  `
  )}

  border: ${border};
`

const Component: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return <DivStyled>Text {children}</DivStyled>
}

describe('Theme', () => {
  it('Render Styled component', () => {
    const tree = render(<Component></Component>)

    const node = tree.container.children[0]

    expect(tree.baseElement.parentNode).toMatchSnapshot()

    expect(node).toMatchSnapshot()

    expect(node).toHaveStyleRule('color', theme.colors.primary)

    expect(node).toHaveStyleRule('border', border)

    expect(node).toHaveStyleRule('padding', '10px', {
      media: `(min-width: ${theme.breakpoints.sm}px)`,
    })

    expect(node).toHaveStyleRule('color', theme.colors.primary, {
      media: `(min-width: ${theme.breakpoints.lg}px)`,
    })
  })
})
