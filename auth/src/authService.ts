/**
 * Service
 * 
 * handles all the business logic before interacting with the model
 */

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByUsername, createUser } from "./userModel.ts";

const SECRET_KEY = process.env.JWT_SECRET || "supersecret";

export async function register(username: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(username, hashedPassword);
  return { message: "User registered successfully" };
}

export async function login(username: string, password: string) {
  const user = await findUserByUsername(username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
  return { token };
}