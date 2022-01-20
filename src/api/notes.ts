import * as t from "io-ts"
import { baseUrl } from "./common"

export const getNotes =`${baseUrl}/api/notes`

export const getNote = (id:number) =>
    `${baseUrl}/api/notes/${id}`