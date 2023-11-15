"use client"
import React, { useRef, useState, useEffect } from "react"
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
  const [showPassBtn, setShowPassBtn] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-start items-center h-auto w-auto bg-stone-600 rounded-2xl">
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
            className="rounded-md bg-black p-1"
            placeholder="jack@daniels.com"
          ></input>
        </div>
        <div className="mt-4">
          Password:
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={(e) => (pass.current = e.target.value)}
              className="rounded-md bg-black p-1"
            ></input>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-1"
            >
              {showPassword ? (
                <AiFillEye color="lightgray" size="1.5em" className="" />
              ) : (
                <AiFillEyeInvisible color="lightgray" size="1.5em" className="" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col p-2 m-6 bg-black text-orange-500 min-w-[228px] rounded-lg border-2 border-orange-500">
          <button onClick={onSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
