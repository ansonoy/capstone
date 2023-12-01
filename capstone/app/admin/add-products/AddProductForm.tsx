"use client"

import AdminTextArea from "@/app/components/ui/adminTextArea"
import AuthInput from "@/app/components/ui/authInput"
import UpImage from "@/app/components/upImage"
import UploadImage from "@/app/components/uploadImage"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

export type ImageType = {
  image: File | null
}

export type UploadedImageType = {
  image: string
}

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState<ImageType[] | null>(null)
  const [isProductCreated, setIsProductCreated] = useState(false)

  console.log("images<<<", images)

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
      percentage: "",
      imageurl: ""
    }
  })

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  useEffect(() => {
    setCustomValue("images", images)
  }, [images])

  useEffect(() => {
    if (isProductCreated) {
      reset()
      setImages(null)
      setIsProductCreated(false)
    }
  }, [])

  const addImageToState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (!prev) {
        return [value]
      }
      return [...prev, value]
    })
  }, [])

  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (!prev) {
        return null
      }
      return prev.filter(
        (image) => image.image && image.image.name !== value.image?.name
      )
    })
  }, [])

  return (
    <div className="text-black flex flex-col space-y-4 w-4/6">
      <div className="flex flex-row justify-between space-x-2">
        <div className="relative w-full">
          <AuthInput
            disabled={isLoading}
            placeholder="Product Name"
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
        <div className="relative w-full">
          <AuthInput
            disabled={isLoading}
            placeholder="Alcohol Type"
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
              Alcohol type is required
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between space-x-2">
        <div className="relative w-full">
          <AuthInput
            disabled={isLoading}
            placeholder="Price"
            label="price"
            required
            register={register}
            errors={errors}
            id="price"
            type="number"
            min={0}
            className={cn({
              "focus-visible:ring-orange-500": true,
              "text-black": true,
              "ring-red-700 ring-2": errors.price
            })}
          />
          {errors.price && (
            <div className="absolute left-3 top-4 pointer-events-none text-red-500">
              Price is required
            </div>
          )}
        </div>
        <div className="relative w-full">
          <AuthInput
            disabled={isLoading}
            placeholder="Alcohol Percentage"
            label="percentage"
            required
            register={register}
            errors={errors}
            id="percentage"
            type="number"
            min={0}
            max={99}
            className={cn({
              "focus-visible:ring-orange-500": true,
              "text-black": true,
              "ring-red-700 ring-2": errors.percentage
            })}
          />
          {errors.name && (
            <div className="absolute left-3 top-4 pointer-events-none text-red-500">
              Percentage is required
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <AdminTextArea
          disabled={isLoading}
          placeholder="Describe the product..."
          label="description"
          required
          register={register}
          errors={errors}
          id="description"
          className={cn({
            "focus-visible:ring-orange-500": true,
            "text-black": true,
            "ring-red-700 ring-2": errors.description,
            "h-32": true
          })}
        />
        {errors.description && (
          <div className="absolute left-3 top-4 pointer-events-none text-red-500">
            Description is required
          </div>
        )}
      </div>
      <div className="relative">
        <UploadImage
          handleFileChange={() => {}}
          addImageToState={addImageToState}
          removeImageFromState={removeImageFromState}
          isProductCreated={isProductCreated}
        />
      </div>
    </div>
  )
}
export default AddProductForm
