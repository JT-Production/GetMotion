import type { Request, Response } from "express";
import User from "./user.model.js";
import type { userData } from "../../types/users.js";

const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password }: userData = req.body;

        //validation 
        if(!username || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }
        // Check if the user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }


        // Create a new user
        const user = new User({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: password,
        });

        await user.save();

        res.status(201).json({ message: "User registered successfully", user: {
            username: user.username,
            email: user.email,
            role: user.role,
            status: user.status,
            emailVerifiedAt: user.emailVerifiedAt,
        } });

        

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
}


export { registerUser };