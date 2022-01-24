import { getNote } from "../notes"

const url = process.env.NODE_ENV ==="development" ? "http://localhost:3000/" : "https://my-notes-nine.vercel.app/"

describe('Notes Api', () => {
    it('"getNote" : should return the expected url', () => {
        const expected = `${url}/api/notes/1`

        const actual = getNote(1)

        expect(actual).toEqual(expected)
    })
    
})

