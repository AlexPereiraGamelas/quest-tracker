/**
 * Controller
 * 
 * handles requests to the proper service and handles the response
 */

import type { Request, Response } from "express";
import { register, login } from "./authService.ts";

export async function registerUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const result = await register(username, password);
    res.json(result);
  } catch (error) {
    if(error instanceof Error) {
      console.log(error)
      res.status(400).json({ error: error.message });
      return
    }
    res.status(400).json({ error: "Unkown Error" });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const result = await login(username, password);
    res.json(result);
  } catch (error) {
    if(error instanceof Error) {
      res.status(400).json({ error: error.message });
      return
    }
    res.status(400).json({ error: "Unkown Error" });
  }
}