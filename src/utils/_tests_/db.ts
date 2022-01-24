import mongoose from 'mongoose'
import NoteModel, { INote, INoteSchema } from '../../models/Note'
import  {MongoMemoryServer } from "mongodb-memory-server"
/**
 @shelf/jest-mongodb
 */

const noteData:INote = {
    "title":"My Test note",
    "description":"Integer orci augue, tincidunt eget sem a, consectetur sodales odio. Proin ac justo vestibulum, ultricies orci quis, dapibus risus. Proin bibendum nisi sit amet erat aliquam porttitor. Suspendisse at libero finibus, sollicitudin ex et, vulputate mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ornare, odio sit amet aliquam sagittis, urna libero tempor ipsum, nec dignissim felis risus eget neque. Pellentesque facilisis mi elit, ac ultrices quam commodo bibendum. Sed efficitur libero quis luctus faucibus. Proin id congue urna, eget hendrerit lacus. Ut finibus tortor eget egestas ultricies.",
    "author":"Tester",
    "isPrivate":false
}

const mongod = new MongoMemoryServer();

describe('User Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect
    beforeAll( () => {
        mongoose.connect(mongod.getUri(), (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validNote:INoteSchema = new NoteModel(noteData);
        const savedNote = await validNote.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedNote._id).toBeDefined();
        expect(savedNote.createdAt).toBeDefined();
        expect(savedNote.updatedAt).toBeDefined();
        expect(savedNote.title).toBe(noteData.title);
        expect(savedNote.description).toBe(noteData.description);
        expect(savedNote.author).toBe(noteData.author);
  
    });

    // // Test Schema is working!!!
    // // You shouldn't be able to add in any field that isn't defined in the schema
    // it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
    //     const userWithInvalidField = new UserModel({ name: 'TekLoon', gender: 'Male', nickname: 'Handsome TekLoon' });
    //     const savedNoteWithInvalidField = await userWithInvalidField.save();
    //     expect(savedNoteWithInvalidField._id).toBeDefined();
    //     expect(savedNoteWithInvalidField.nickkname).toBeUndefined();
    // });

    // // Test Validation is working!!!
    // // It should us told us the errors in on gender field.
    // it('create user without required field should failed', async () => {
    //     const userWithoutRequiredField = new UserModel({ name: 'TekLoon' });
    //     let err;
    //     try {
    //         const savedNoteWithoutRequiredField = await userWithoutRequiredField.save();
    //         error = savedNoteWithoutRequiredField;
    //     } catch (error) {
    //         err = error
    //     }
    //     expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    //     expect(err.errors.gender).toBeDefined();
    // });
    
})

