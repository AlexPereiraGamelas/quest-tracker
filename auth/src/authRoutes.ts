import express from "express";
import { registerUser, loginUser } from "./authController.ts";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", (req, res) => {
  return res.json({ message: 'Alive and Well' });
})

export default router;