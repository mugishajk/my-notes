import mongoose from 'mongoose'

import  {MongoMemoryServer } from "mongodb-memory-server"

const mongod = new MongoMemoryServer();

// connect to db 
const connect = async () => {
    const uri = await mongod.getUri()
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    await mongoose.connect(uri,mongooseOpts);
}

// disconnect and close connection 
const closeDatabase = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

const clearDatabase = async () => {
    const {collections} = mongoose.connection
    for (const key in collections) {
        const collection = collections[key]
        await collection.deleteMany({})
    }
}

const db = {
    connect,
    closeDatabase,
    clearDatabase
}

export default db