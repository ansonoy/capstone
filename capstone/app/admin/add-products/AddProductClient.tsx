'use client'

import AdminTextArea from "@/app/components/ui/adminTextArea"
import AuthInput from "@/app/components/ui/authInput"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      type: "",
      price: "",
      stripe: "",
      inventory: false,
      description: "",
      percentage: 0,
      imageurl: ""
    }
  })
  return (
    <>
      <div className="text-black flex flex-col space-y-4 w-4/6">
        <div className="relative">
          <AuthInput
            disabled={isLoading}
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
        <div className="relative">
          <AuthInput
            disabled={isLoading}
            placeholder="What type of alcohol? Gin? Vodka?"
            label="type"
            required
            register={register}
            errors={errors}
            id="type"
            className={cn({
              "focus-visible:ring-orange-500": true,
              "text-black": true,
              "ring-red-700 ring-2": errors.type
            })}
          />
          {errors.type && (
            <div className="absolute left-3 top-4 pointer-events-none text-red-500">
              Type is required
            </div>
          )}
        </div>
        <div className="relative">
          <AuthInput
            disabled={isLoading}
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
        <div className="relative">
          <AuthInput
            disabled={isLoading}
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
        <div className="relative">
          <AuthInput
            disabled={isLoading}
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
        <div className="relative">
          <AuthInput
            disabled={isLoading}
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
        <div className="relative">
          <AuthInput
            disabled={isLoading}
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
        <div className="relative">
          <AdminTextArea
            disabled={isLoading}
            placeholder="Describe the product..."
            label="name"
            required
            register={register}
            errors={errors}
            id="name"
            className={cn({
              "focus-visible:ring-orange-500": true,
              "text-black": true,
                "ring-red-700 ring-2": errors.name,
              "h-32": true
            })}
          />
          {errors.name && (
            <div className="absolute left-3 top-4 pointer-events-none text-red-500">
              Name is required
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default AddProductForm