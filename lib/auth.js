import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";
import connectDB from "@/lib/db";

await connectDB();

export const auth = betterAuth({
    plugins: [expo()],
    emailAndPassword: { 
        enabled: true, // Enable authentication using email and password.
      }, 
});