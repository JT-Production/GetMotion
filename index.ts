import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import app from "./app.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);


dotenv.config({
    path: './.env',
    quiet: true
}); // Load environment variables from .env file

const startServer = async () => {
    try {
        console.log("MongoDB URI: ", process.env.MONGODB_URI)
        await connectDB();

        const server = app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        })
        server.on("error", (error: Error) => {
            console.log("ErrorRR", error);
            throw error;
        });

    } catch (error) {
        console.error("Error starting server:", error);
    }
}

startServer();