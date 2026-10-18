import express from "express";

const app = express();

app.use(express.json());

import userRoutes from "./src/modules/auth/user.route.ts";

app.use("/api/v1/users", userRoutes);


export default app;