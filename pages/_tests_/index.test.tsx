import { render, screen } from '@testing-library/react'
import Home from '../index'

describe('Home', () => {
    it('renders the home page ', () => {
        render(<Home />)

        const home = screen.getByTestId('home-page')

        expect(home).toBeInTheDocument()
    })
})