"use client"
import React, { useRef, useState } from "react"
import WDD from "@/public/WDDbig.svg"
import Link from "next/link"
import Image from "next/image"
import { signIn } from "next-auth/react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const SignInPage = () => {
  //grab user inputs, give them to signIn function

  const userName = useRef("")
  const pass = useRef("")

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/"
    })
  }

  //control password visibility
  const [showPassword, setShowPassword] = useState(false)
  const [passInput, setPassInput] = useState("")

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-start items-center h-auto w-auto bg-gradient-to-b from-stone-300 to-stone-800 rounded-2xl">
        <Link href="/">
          <Image
            src={WDD}
            width={250}
            height={250}
            alt="/images/WDD.png"
            className="pt-5"
          ></Image>
        </Link>
        <div className="flex flex-col">
          Username:
          <input
            type="text"
            onChange={(e) => (userName.current = e.target.value)}
            className="rounded-md bg-black border-2 border-black pl-1"
            placeholder="jack@daniels.com"
          ></input>
        </div>
        <div className="mt-4">
          Password:
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={(e) => (pass.current = e.target.value)}
              className="rounded-md bg-black border-2 border-black pl-1"
            ></input>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0"
            >
              {showPassword ? (
                <AiFillEye color="black" />
              ) : (
                <AiFillEyeInvisible color="black" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col p-2 m-6 bg-black text-orange-500 min-w-[220px] rounded-lg border-2 border-orange-500">
          <button onClick={onSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
