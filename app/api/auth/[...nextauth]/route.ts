import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.github_id as string,
            clientSecret: process.env.github_secret_id as string,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
