/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dbConnect from '../../../src/utils/dbConnect'
import Note, { INote } from '../../../src/models/Note'
import { NextApiRequest, NextApiResponse } from 'next'

void dbConnect()
type Data = {
    success: boolean,
    data?: INote[] | INote,
    error?: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    switch (method) {
    case "GET":
        try {
            // get all the public notes
           
            const notes = await Note.find({isPrivate:false})
            res.status(200).json({ success: true, data: notes })
        } catch (error) {
            res.status(400).json({ success: false , error: "There is a server error"})
        }
        break;
    case "POST":
        try {
            const note = await Note.create(body)
            res.status(201).json({ success: true, data: note })
        } catch (error) {
            res.status(400).json({ success: false , error: "There is a server error"})
        }
        break;

    default:
        res.status(400).json({ success: false })
        break;
    }

}