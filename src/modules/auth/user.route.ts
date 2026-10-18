import { Router } from "express";
import { registerUser } from "../auth/user.controller.js";

const router = Router(); // Create a router instance

// Define routes
router.route("/register").post(registerUser);


export default router;