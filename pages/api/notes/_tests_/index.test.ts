/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import db from "../../../../src/utils/_tests_/db"
import Note from '../../../../src/models/Note'
/**
 * @jest-environment node
 */

beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

describe('Api Routes : Notes', () => {
    it('should insert a note document into the Note collection properly', async ( ) => {

        const mockNote = {
            title:"My test note",
            description:"Ny test note description",
            author:"Mugz"
        }

        const note = await Note.create(mockNote);

        expect(note.title).toEqual("My test note")
        expect(note.description).toEqual("Ny test note description")
        expect(note.author).toEqual("Mugz")

    }
    )
})
