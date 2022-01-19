import { render, screen } from "@testing-library/react"
import Switch from "../Switch"

describe("Switch", () => {
    it("should render correctly Switch", () => {
        render(<Switch label={"my test label"} />)
        expect(screen.getByTestId('switch')).toBeInTheDocument()
        expect(screen.getByText('my test label')).toBeInTheDocument()
    })

})