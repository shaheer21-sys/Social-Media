import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongodb.js";

const app = express();
const PORT  = process.env.PORT || 5001;
dotenv.config();

// console.log(process.env.MONGO_URI);

app.use("/api/auth" , authRoutes);

app.listen( PORT ,  () => {
    console.log(`server is running on the port ${PORT}`);
    connectMongoDB();
})