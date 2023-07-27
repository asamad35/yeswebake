import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    callbacks: {
        async session({ session, user, token }) {
            console.log({ session, user, token }, 'xxxxxxx')
            return session
        },
        // async jwt({ token, user, account, profile }) {
        //     console.log({ token, user, account, profile }, 'bbbbbbbbbbbbbbb')
        //     return token
        // }
    }
});

export { handler as GET, handler as POST };