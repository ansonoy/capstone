"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import React from "react"

const SignInButton = () => {
  const { data: session } = useSession()
  console.log(session?.user)
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <div className="flex text-sky-400 items-center">Welcome back, {session.user.name}</div>
        <div className="bg-white p-1 rounded-md">
          <button onClick={() => signOut()} className="text-red-600">
            Sign Out
          </button>
        </div>
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
