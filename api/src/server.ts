import express from 'express';
import type { Request, Response } from "express";

import pool from "./connection.ts"
import { authenticateToken } from './middleware/authMiddleware.ts';

const app = express();
const port = 5000;

// Define a simple endpoint that returns a message
app.get('/api', (req: Request, res: Response): Response => {
  return res.json({ message: "I'm alive POP" });
});

// Route to get all users
// Temporary Example of API -> DB
app.get('/api/users', async (req, res) => {
  try {
    // Query the 'users' table
    const result = await pool.query('SELECT * FROM "users"');
    
    // Send the users data as JSON response
    res.json(result.rows);
  } catch (error) {
    if (error instanceof Error) {
      console.error("There was an error!", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api/serverStatus", (req: Request, res: Response): NodeJS.Timeout => {
  // set timeout to set up example of loading state in UI with react-query
  return setTimeout(() => {
    return res.json({ message: 'Alive and Well' });
  }, 2000)
});

app.get("/api/protected", authenticateToken, (req: Request, res: Response) => {
  // set timeout to set up example of loading state in UI with react-query
  res.json({ message: 'Success' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
