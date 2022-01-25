/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Note from '../../../../src/models/Note'
/**
 @shelf/jest-mongodb
 */

describe('Api Routes : Notes', () => {
    it('should insert a note document into the Note collection properly', async ( ) => {

        const mockNote = {
            title:"My test note",
            description:"Ny test note description",
            author:"Mugisha"
        }

        const note = await Note.create(mockNote);

        expect(note.title).toEqual(mockNote.title)
        expect(note.description).toEqual(mockNote.description)
        expect(note.author).toEqual(mockNote.author)

    }
    )
})
