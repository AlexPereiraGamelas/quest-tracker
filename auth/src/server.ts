import express from "express";
import dotenv from "dotenv";
import authRoutes from "./authRoutes.ts";
import bcrypt from "bcryptjs";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
   const hashedPassword = await bcrypt.hash("dev", 10);
   console.log(hashedPassword)
   
});
