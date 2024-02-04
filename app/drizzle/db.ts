import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

// Retrieve the database connection string from the environment variable
const connectionString: string | undefined = process.env.DATABASE_URL;

const client = new Client({
  connectionString,
});


client.connect()
    .then((res) => {
        console.log('database connected: ', res);
    })
    .catch((err) => {
        console.log('Failed to connect database: ', err);
    });
    
export const db = drizzle(client);