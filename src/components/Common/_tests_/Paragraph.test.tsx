import { render, screen } from "@testing-library/react"
import Paragraph from "../Paragraph"

describe("Paragraph", () => {
    it("should render correctly Paragraph and its children", () => {
        render(<Paragraph >My test text</Paragraph>)
        expect(screen.getByTestId('paragraph')).toBeInTheDocument()
        expect(screen.getByText('My test text')).toBeInTheDocument()
    })

})