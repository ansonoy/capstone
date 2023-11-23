import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text"
        },
        password: {
          label: "password",
          type: "password"
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid email or password ONE")
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user?.password) {
          throw new Error("Invalid email or password TWO")
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!isCorrectPassword) {
          throw new Error("Invalid email or password THREE")
        }
        return user
      }
    })
  ],
  pages: {
    signIn: "/signIn"
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
})
