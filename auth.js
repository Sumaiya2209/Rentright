import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_URI);
const db = client.db('rentright-db');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client, 
    trustedOrigins: ["rentright://"]
  }),
});




/* export const auth = betterAuth({
    trustedOrigins: ["rentright://"]
}) */