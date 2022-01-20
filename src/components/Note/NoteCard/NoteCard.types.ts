import * as t from "io-ts"

export const NoteCardValidator = t.type({

})

export type NoteCardProps = t.TypeOf<typeof NoteCardValidator> 