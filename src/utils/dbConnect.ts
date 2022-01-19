import mongoose from 'mongoose'
const connection: { isConnected: number; } = {isConnected: NaN} ;



const dbConnect = async () => {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.MONGO_URI || "")

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}

export default dbConnect