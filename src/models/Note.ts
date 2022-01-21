import mongoose, { Schema, Document } from 'mongoose'

export interface INote {
    _id?:string;
    title: string;
    description: string;
    author: string;
    expireAt?: Date;
    isPrivate: boolean;
    createdAt?:Date; 
    updatedAt?:Date;
}

export interface INoteSchema extends Document {
    _id?:string;
    title: string;
    description: string;
    author: string;
    expireAt?: Date;
    isPrivate: boolean;
    createdAt?:Date; 
    updatedAt?:Date;
}

const NoteSchema = new Schema<INoteSchema >({
    "title": {
        "type": String,
        "required": [true, "Please add a title to your note"],
        "trim": true,
        "maxlength": [100, "The title cannot be more than 100 characters"]
    },
    "description": {
        "type": String,
        "required": [true, "Please add some text to your note"],
        "trim": true,
        "maxlength": [3000, "The description cannot be more than 3000 characters"]
    },
    "author": {
        "type": String,
        "trim": true,
        "required": [true, "Please add the note\'s author"],
    },
    "expireAt": {
        "type": Date,
        "default": null
    },
    "isPrivate": {
        "type": Boolean,
        "default": false
    }

},
{ "timestamps": true  })

// if the model exists already, we export it else we create it and export it
const Note =  mongoose.models.Note || mongoose.model<INote>("Note", NoteSchema,"notes");
// 
export default Note