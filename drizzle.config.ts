import type { Config } from 'drizzle-kit';
require('dotenv').config();


const connectionString = process.env.DATABASE_URL as string;

if (!connectionString) {
    console.log('no connection string');
    process.exit();
}

export default {
    schema: "./app/drizzle/schema.ts",
    driver: "pg",
    dbCredentials: {
        connectionString,
    },
    verbose: true,
    strict: true,
} satisfies Config;
