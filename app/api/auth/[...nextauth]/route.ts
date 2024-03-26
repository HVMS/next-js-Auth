import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.github_id as string,
            clientSecret: process.env.github_secret as string,
        }),
    ],
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST};
