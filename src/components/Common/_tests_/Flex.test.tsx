import { render, screen } from "@testing-library/react"
import Flex from "../Flex"

describe("Flex", () => {
    it("should render correctly Flex", () => {
        render(<Flex ><p>Some child</p> </Flex>)
        expect(screen.getByTestId('flex')).toBeInTheDocument()
        expect(screen.getByText('Some child')).toBeInTheDocument()
    })

})