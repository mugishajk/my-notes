import { render, screen } from "@testing-library/react"
import Field from "../Field"

describe("Field", () => {
    it("should render correctly Field", () => {
        render(<Field label="Email" name="email" defaultValue="" />)
        expect(screen.getByTestId('field')).toBeInTheDocument()
        expect(screen.getByLabelText('Email')).toBeInTheDocument()
    })

})