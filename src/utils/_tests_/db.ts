import mongoose from 'mongoose'

import  {MongoMemoryServer } from "mongodb-memory-server"

const mongod = new MongoMemoryServer();

// connect to db 
export const connect = async () => {
    const uri = await mongod.getUri()
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    await mongoose.connect(uri,mongooseOpts);
}

// disconnect and close connection 
export const closeDatabase = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

// clear the db, remove all data
export const clearDatabase = async () => {
    const {collections} = mongoose.connection
    for (const key in collections) {
        const collection = collections[key]
        await collection.deleteMany()
    }
}