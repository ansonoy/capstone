"use client"
import Image from "next/image"
import WDD from "@/public/WDDbig.svg"
import Link from "next/link"
import Input from "../components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Button } from "../components/ui/button"
import { FieldValues, useForm, SubmitHandler } from "react-hook-form"
import Checkbox from "../components/ui/checkbox"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

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
              Already have an account? <span className="font-bold">Sign in</span>
            </Link>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2 relative">
                  <Input
                    placeholder="Name"
                    label="name"
                    required
                    register={register}
                    errors={errors}
                    id="name"
                    className={cn({
                      "focus-visible:ring-orange-500": true,
                      "text-black": true,
                      "ring-red-700 ring-2": errors.name
                    })}
                  />
                  {errors.name && (
                    <div className="absolute left-3 top-4 pointer-events-none text-red-500">
                      Name is required
                    </div>
                  )}
                </div>
                <div className="grid gap-1 py-2 relative">
                  <Input
                    placeholder="Email"
                    label="Email"
                    required
                    register={register}
                    errors={errors}
                    id="email"
                    className={cn({
                      "focus-visible:ring-orange-500": true,
                      "text-black": true,
                      "ring-red-700 ring-2": errors.email
                    })}
                  />
                  {errors.email && (
                    <div className="absolute left-3 top-4 pointer-events-none text-red-500">
                      Email is required
                    </div>
                  )}
                </div>
                <div className="grid gap-1 py-2 relative">
                  <Input
                    placeholder="Password"
                    label="Password"
                    required
                    register={register}
                    errors={errors}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={cn({
                      "focus-visible:ring-orange-500": true,
                      "text-black": true,
                      "ring-red-700 ring-2": errors.password
                    })}
                  />
                  {errors.password && (
                    <div className="absolute left-3 top-4 pointer-events-none text-red-500">
                      Password is required
                    </div>
                  )}
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
                <div className="flex flex-row">
                  <Checkbox id="terms" className="mr-2 mt-1" register={register} errors={errors} />
                  <div className="">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I certify that I am of legal drinking age in Canada and
                      agree to the terms and conditions of Whispering Dutchman
                      Distillery.
                    </label>
                    {errors.terms && (
                      <div className="pointer-events-none text-red-500">
                        You must accept the terms and conditions and confirm
                        your age.
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  variant="outline"
                  className="hover:text-orange-500 mt-2 hover:ring-orange-500 hover:border-orange-500 ring-2 ring-transparent hover:bg-black bg-black"
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
