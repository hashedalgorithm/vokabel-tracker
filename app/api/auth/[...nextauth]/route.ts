import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { Pool } from "pg";

// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
