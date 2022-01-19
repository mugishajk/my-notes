import { render, screen } from "@testing-library/react"
import Heading from "../Heading"

describe("Heading", () => {
    it("should render correctly Heading and its children", () => {
        render(<Heading >My test text</Heading>)
        expect(screen.getByTestId('heading')).toBeInTheDocument()
        expect(screen.getByText('My test text')).toBeInTheDocument()
    })

})