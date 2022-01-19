import { render, screen } from "@testing-library/react"
import Card from "../Card"
import Text from '../Text'
describe("Card", () => {
    it("should render correctly Card and its children if its a paragraph", () => {
        render(<Card ><p>My test text</p></Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()
        expect(screen.getByText('My test text')).toBeInTheDocument()
    })
    it("should render correctly Card and its children if its a component", () => {
        render(<Card ><Text text={"My test text from component"} /></Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()
        expect(screen.getByText('My test text from component')).toBeInTheDocument()
    })

})