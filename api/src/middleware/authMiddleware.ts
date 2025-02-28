/**
 * Middleare for protected endpoints
 */

import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "supersecret";

// Middleware to verify JWT tokens in the API service
export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from "Bearer <token>"
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    (req as any).user = decoded; // Attach user info to request
    next();
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
}