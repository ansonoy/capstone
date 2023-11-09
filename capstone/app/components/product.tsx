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
    <div className="pt-4 flex flex-col bg-gradient-to-l from-black via-gray-900 to-black text-white rounded hover:scale-[1.05] transition-all group">
      <div className="">
        <div>{image}</div>
      </div>
      <div className=" italic ">{name}</div>
      <div className=" italic ">{type}</div>
      <div className="">
        <hr></hr>
        <hr></hr>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="flex">${price}</div>
        <div className="flex">{percentage}%</div>
      </div>
      <div className=" bold rounded">
        <button className="invisible group-hover:visable">Add to Cart?</button>
      </div>
    </div>
  )
}
