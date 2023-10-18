import React from "react"
import { ReactNode } from "react"

export interface RecipeProps {
  image?: ReactNode
  name?: String
  description?: String
}

export default function Recipe({
  image,
  name,
  description
}: RecipeProps) {
  return (
    <div className="flex flex-col bg-black/[0.80] text-white rounded font-serif hover:w-1/4 hover:h-3/4 group">
    <div className="bg-black/[0.4]">
      <div>{image}</div>
    </div>
    <div className=" italic ">{name}</div>
    <div className="">
      <hr></hr>
      <hr></hr>
    </div>

    <div className="flex">${description}</div>
    </div>
  )
}
