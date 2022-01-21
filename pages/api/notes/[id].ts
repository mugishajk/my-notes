import dbConnect from '../../../src/utils/dbConnect'
import Note, { INote } from '../../../src/models/Note'
import { NextApiRequest, NextApiResponse } from 'next'

dbConnect()
type Data = {
    success: boolean,
    data?: INote[] | INote | Record<string, never>,
    error?: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { query : {id}, method, body } = req

    switch (method) {
    case "GET":
        try {
            const note = await Note.findById(id)

            if (!note) {
                return res.status(400).json({ success: false , error: "This note does not exist"})
            }

            res.status(200).json({ success: true, data: note })

        } catch (error) {
            res.status(400).json({ success: false , error: "There is a server error"})
        }
        break;
    case "PUT":
        try {
            const note = await Note.findByIdAndUpdate(id,body,{
                new:false,
                runValidators:true
            })

            if (!note) {
                return res.status(400).json({ success: false , error: "This note does not exist"})
            }

            res.status(201).json({ success: true, data: note })
        } catch (error) {
            res.status(400).json({ success: false , error: "There is a server error"})
        }
        break;
    case "DELETE":
        try {
            const deletedNote = await Note.deleteOne({_id: id})

            if (!deletedNote) {
                return res.status(400).json({ success: false , error: "This note does not exist"})
            }
            
            res.status(201).json({ success: true, data: {} })
        } catch (error) {
            res.status(400).json({ success: false , error: "There is a server error"})
        }
        break;
    default:
        res.status(400).json({ success: false })
        break;
    }

}