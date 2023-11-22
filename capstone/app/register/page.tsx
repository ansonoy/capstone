"use client"
import Image from "next/image"
import WDD from "@/public/WDDbig.svg"
import Link from "next/link"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Button } from "../components/ui/button"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [register, handleSubmit, formState] = useState(false)

  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image
              src={WDD}
              width={250}
              height={250}
              alt="/images/WDD.png"
              className=""
            ></Image>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link href="signIn" className="text-orange-500 hover:underline">
              Already have an account? Sign-in
            </Link>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    id="email"
                    className={cn({
                      "focus-visible:ring-orange-500": true,
                      "text-black": true
                    })}
                  />
                </div>
                <div className="grid gap-1 py-2 relative">
                  <Label htmlFor="password">Password:</Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={cn({
                      "focus-visible:ring-orange-500": true,
                      "text-black": true
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 bottom-4"
                  >
                    {showPassword ? (
                      <AiFillEye color="black" size="1.5em" />
                    ) : (
                      <AiFillEyeInvisible color="black" size="1.5em" />
                    )}
                  </button>
                </div>
                <Button
                  variant="outline"
                  className="hover:text-orange-500 mt-2 hover:ring-orange-500 ring-2 ring-transparent hover:bg-black bg-black"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register
