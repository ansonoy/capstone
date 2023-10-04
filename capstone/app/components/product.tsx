import React from "react"
import { ReactNode } from "react"

export interface ProductProps {
  price?: number
  name?: String
  image?: ReactNode
  percentage?: number
  type?: String
}

export default function Product({
  price,
  name,
  image,
  percentage,
  type
}: ProductProps) {
  return (
    <div className="flex flex-col bg-red-500">
      <div className="flex bg-red-200">
        <div>{image}</div>
      </div>
      <div>{name}</div>
      <div>{type}</div>
      <div>
        <hr></hr>
      </div>
      <div className="flex flex-row">
        <div className="flex">{price}</div>
        <div className="flex">{percentage}%</div>
      </div>
    </div>
  )
}
