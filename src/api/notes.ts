import * as t from "io-ts"
import { baseUrl } from "./common"

// getters
export const getNotes =`${baseUrl}/api/notes`

export const getNote = (id:number | string ) =>
    `${baseUrl}/api/notes/${id}`

// setters
export const setNote = async (id:number | string ,options:object) => {
    const response = await fetch(`${baseUrl}/api/notes/${id}`, options)
    const data = await response.json()
    
    if (!response.ok) {
        throw new Error(data.message);
    }
  
    return data
}

export const newNote = async (options:object) => {
    const response = await fetch(`${baseUrl}/api/notes`, options)
    const {success,error,data} = await response.json()
    
    if (!success) {
        throw new Error(error);
    }
  
    return data
}
