import { render, screen } from "@testing-library/react"
import Textarea from "../Textarea"

describe("Text Area", () => {
    it("should render correctly Text", () => {
        render(<Textarea defaultValue={"abc"} />)
        expect(screen.getByTestId('text-area')).toBeInTheDocument()
        expect(screen.getByText('abc')).toBeInTheDocument()
    })

})