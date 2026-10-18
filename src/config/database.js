import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
        console.log(`MongoDB name: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;