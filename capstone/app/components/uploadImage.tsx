import { useCallback, useState } from "react"
import { ImageType } from "../admin/add-products/AddProductForm"
import { useDropzone } from "react-dropzone"
import { Button } from "./ui/button"

interface UploadImageProps {
  item?: ImageType
  handleFileChange: (value: File) => void
  addImageToState: (value: ImageType) => void
  removeImageFromState: (value: ImageType) => void
  isProductCreated: boolean
}

const UploadImage: React.FC<UploadImageProps> = ({
  item,
  handleFileChange,
  addImageToState,
  removeImageFromState,
  isProductCreated
}) => {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0])
      setFile(acceptedFiles[0])
      addImageToState({ image: acceptedFiles[0] }) // Add the image to the state
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png"] }
  })

  const handleRemoveImage = useCallback(() => {
    const currentFile = file
    setFile(null)
    removeImageFromState({ image: currentFile })
  }, [file])

  return (
    <div className="flex flex-row items-center justify-between text-stone-50">
      <div
        {...getRootProps()}
        className="border-2 border-stone-500 hover:text-orange-500 hover:border-orange-500 p-2 border-dashed cursor-pointer flex items-center justify-center rounded-md"
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop your PNG here.</p> : <p>+ Product PNG</p>}
      </div>
      <div className="flex flex-col items-center">
        {file && <p>Selected Image: {file.name}</p>}
        {file && (
          <img
            className="h-32 w-32"
            src={URL.createObjectURL(file)}
            alt={file.name}
          />
        )}
      </div>
      {file && (
        <Button
          className="hover:text-orange-500 mt-2 hover:ring-orange-500 hover:border-orange-500 ring-2 ring-transparent hover:bg-black bg-black"
          onClick={handleRemoveImage}
        >
          Remove Image
        </Button>
      )}
    </div>
  )
}

export default UploadImage
