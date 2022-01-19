import mongoose, { Schema, Document } from 'mongoose'

export interface INote extends Document {
    title: string;
    description: string;
    author: string;
    expiryDate?: number;
    isPrivate: boolean;
}

const NoteSchema = new Schema<INote>({
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
    "expiryDate": {
        "type": Number,
        "default": null
    },
    "isPrivate": {
        "type": Boolean,
        "default": false
    }

},
{ "timestamps": true })

// if the model exists already, we export it else we create it and export it
const Note = mongoose.models.Note || mongoose.model<INote>("Note", NoteSchema);

export default Note