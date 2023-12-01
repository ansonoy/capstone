"use client"
import { useCallback, useEffect, useState } from "react"
import { ImageType } from "../admin/add-products/AddProductForm"
import UploadImage from "./uploadImage"
import { Button } from "./ui/button"

interface UpImageProps {
  item: ImageType
  addImageToState: (value: ImageType) => void
  removeImageFromState: (value: ImageType) => void
  isProductCreated: boolean
}

const UpImage: React.FC<UpImageProps> = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated
}) => {
  const [isSelected, setIsSelected] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false)
      setFile(null)
    }
  }, [isProductCreated])

  const handleFileChange = useCallback((value: File) => {
    setFile(value)
    addImageToState({ ...item, image: value })
  }, [])

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-3">
        <UploadImage item={item} handleFileChange={handleFileChange} />
        {file && (
          <div className="flex flex-row gap-2 text-sm col-span-2 items-center justify-between">
            <p>{file?.name}</p>
            <div>
              <Button
                onClick={() => {
                  setFile(null)
                  removeImageFromState(item)
                }}
                variant="outline"
                className="hover:text-orange-500 mt-2 hover:ring-orange-500 hover:border-orange-500 ring-2 ring-transparent hover:bg-black bg-black"
              >
                Remove
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UpImage
