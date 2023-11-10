import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your Username Here"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "Julien", email: "email@email.com" }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
})
