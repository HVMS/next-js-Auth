// import NextAuth from "next-auth/next";
// import { type NextAuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// export const authOptions: NextAuthOptions = {
//     providers: [
//         GithubProvider({
//             clientId: process.env.github_id as string,
//             clientSecret: process.env.github_secret as string,
//         }),
//     ],
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST};

import NextAuth from "next-auth";
import { NextApiHandler } from "next";
import GithubProvider from "next-auth/providers/github";

const authHandler: NextApiHandler = (req, res) => {
    return NextAuth(req, res, {
        providers: [
            GithubProvider({
                clientId: process.env.github_id as string,
                clientSecret: process.env.github_secret as string,
            }),
        ],
    });
};

export default authHandler;
