import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "1234",
  database: "tsdatabase",
  port: 5432,
});
