import pool from "./connection.ts";

export interface User {
  id: string;
  username: string;
  password: string;
}

export async function findUserByUsername(username: string): Promise<User | null> {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
  return result.rows[0] || null;
}

export async function createUser(username: string, hashedPassword: string): Promise<void> {
  await pool.query("INSERT INTO users (id, username, password) VALUES (gen_random_uuid(), $1, $2)", [username, hashedPassword]);
}