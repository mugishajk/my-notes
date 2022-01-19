import { render, screen } from '@testing-library/react'
import Home from '../index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const home = screen.getByTestId('home')

    expect(home).toBeInTheDocument()
  })
})