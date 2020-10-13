import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #content {
    padding: 16px;
  }
`

const theme = {
  colors: {
    primary: '#333',
  },
}

export default theme
