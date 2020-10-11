import React from 'react'
import { render } from '../testUtils'

const Home: React.FC = () => {
  return <span>Test</span>
}

describe('Home page', () => {
  it('matches snapshot', () => {
    render(<Home />)
  })
})
