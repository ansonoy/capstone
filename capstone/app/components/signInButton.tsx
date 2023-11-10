import { signIn, signOut, useSession } from "next-auth/react"
import React from "react"

const SignInButton = () => {
  const { data: session } = useSession()
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <div className="text-sky-400">{session.user.name}</div>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    )
  }
  return (
    <div className="bg-white p-1 rounded-md">
      <button onClick={() => signIn()} className="text-black">
        Sign In
      </button>
    </div>
  )
}

export default SignInButton
