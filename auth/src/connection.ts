import pg from 'pg';
const { Pool } = pg;

// Create a new pool of connections to the PostgreSQL database
const pool = new Pool({
  user: 'user',        // Database user
  host: 'db',          // Docker service name (can be 'localhost' or 'db' if using Docker Compose)
  database: 'mydb',    // Database name
  password: 'password', // Database password
  port: 5432,          // Default PostgreSQL port
});

export default pool