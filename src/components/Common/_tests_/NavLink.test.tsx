import { render, screen } from "@testing-library/react"
import NavLink from "../NavLink"

describe("NavLink", () => {
    it("should render correctly NavLink and its children", () => {
        render(<NavLink   href="#!">My test link</NavLink>)
        expect(screen.getByTestId('nav-link')).toBeInTheDocument()
        expect(screen.getByText('My test link')).toBeInTheDocument()
    })

})