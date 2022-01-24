import { render, screen } from "@testing-library/react"
import NoteForm from "../NoteForm"

describe("NoteForm", () => {
    it("should render correctly NoteForm and its fields", () => {
        
        render(<NoteForm note={undefined} />)
        expect(screen.getByTestId('note-form')).toBeInTheDocument()
        expect(screen.getByText(/My Note/)).toBeInTheDocument()
        expect(screen.getByTestId('note-form-title')).toBeInTheDocument()
        expect(screen.getByTestId('note-form-description')).toBeInTheDocument()
        expect(screen.getByTestId('note-form-author')).toBeInTheDocument()
        expect(screen.getByTestId('note-form-expires')).toBeInTheDocument()
        expect(screen.getByTestId('note-form-submit-button')).toBeInTheDocument()
        expect(screen.getByText(/Create/)).toBeInTheDocument()
        expect(screen.getByTestId('note-form-is-private')).toBeInTheDocument()
    })
    it("should render correctly NoteForm and its fields", () => {
        const mockNote = {
            "_id": "61eab1493604c7d85e6f63f2",
            "title": "My brand new note",
            "description": "Sed tristique nibh sed pellentesque auctor. Cras mattis eros at sapien cursus pulvinar ut id diam. Curabitur venenatis ac sapien a ultrices. Quisque non massa faucibus, aliquet lorem vulputate, lobortis urna. Maecenas nec lorem et ante dignissim aliquet ut ut felis. Vestibulum ullamcorper consequat laoreet. Suspendisse et lobortis ex. Mauris ornare erat eu venenatis rutrum. Mauris tincidunt, est vehicula accumsan ornare, felis sapien scelerisque arcu, fermentum consequat diam lacus at metus. Vestibulum justo nulla, posuere sodales egestas vel, placerat vitae tellus. Donec interdum, est sed varius interdum, felis lacus facilisis orci, non sagittis felis odio in erat.\n\nIn lacus enim, gravida nec malesuada vel, lobortis eu quam. Sed quis orci congue quam condimentum rhoncus. Curabitur efficitur erat id ullamcorper fringilla. Fusce ornare facilisis augue. Praesent feugiat elit sem, id blandit leo ullamcorper sit amet. Aenean varius, ipsum et gravida tincidunt, odio tellus ultrices turpis, quis scelerisque magna dolor quis dui. Nullam tincidunt nisl quis accumsan rutrum. Suspendisse sodales tellus vitae volutpat eleifend. Suspendisse vel leo nec ipsum tempus suscipit. Donec at mi suscipit, auctor arcu id, dapibus nibh. In hac habitasse platea dictumst. Aliquam sem nibh, rhoncus nec magna ac, fringilla congue purus. Nullam non ex odio.",
            "author": "Mugisha J. Kakou",
            "expireAt": null,
            "isPrivate": false,
            "createdAt": "1970-01-20T00:19:30.761Z",
            "updatedAt": "2022-01-24T12:59:42.915Z",
            "__v": 0
        }
        render(<NoteForm note={mockNote} />)
        expect(screen.getByTestId('note-form')).toBeInTheDocument()
        expect(screen.getByText(/My Note/)).toBeInTheDocument()
        expect(screen.getByTestId('note-form-title')).toBeInTheDocument()
        expect(screen.getByLabelText("Title")).toHaveValue("My brand new note")
        expect(screen.getByTestId('note-form-description')).toBeInTheDocument()
        expect(screen.getByText(/Sed tristique nibh sed pellentesque auctor./)).toBeInTheDocument()
        expect(screen.getByTestId('note-form-author')).toBeInTheDocument()
        expect(screen.getByLabelText("Author")).toHaveValue("Mugisha J. Kakou")
        expect(screen.getByTestId('note-form-expires')).toBeInTheDocument()
        expect(screen.getByTestId('note-form-submit-button')).toBeInTheDocument()
        expect(screen.getByText(/Save Changes/)).toBeInTheDocument()
        expect(screen.getByTestId('note-form-is-private')).toBeInTheDocument()
    })

})