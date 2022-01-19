import { render, screen } from "@testing-library/react"
import Text from "../Text"

describe("Text", () => {
    it("should render correctly Text", () => {
        render(<Text text={"abc"} />)
        expect(screen.getByTestId('text')).toBeInTheDocument()
        expect(screen.getByText('abc')).toBeInTheDocument()
    })

})