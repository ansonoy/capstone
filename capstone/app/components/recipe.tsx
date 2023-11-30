import React from "react"
import { ReactNode } from "react"

export interface RecipeProps {
  image?: ReactNode
  name?: String
  description?: String
  ingredients?: String
  instructions?: String
  garnishing?: String
  enjoyAlso?: String

}

export default function Recipe({
  image,
  name,
  description,
  ingredients,
  instructions,
  garnishing,
  enjoyAlso
}: RecipeProps) {
  return (
    <div className=" grid grid-cols-2 gap-5 pt-4 pl-10 bg-gradient-to-l min-w-[70%] from-black via-gray-900 to-black text-white rounded scale-[1.05] transition-all">
      <div className="">
        <div className="">
          <div>{image}</div>
          <hr />
          <div className="font-semibold">Name: {name}</div>
          <div className="">{description}</div>
        </div>
      </div>
      <div className="pr-10">
        <div className="">
          Ingredients: <br></br>
          {ingredients}
        </div>
        <hr></hr>
        <div className="">
          Instructions: <br></br>
          {instructions}
        </div>
        <hr></hr>
        <div className="">
          Garnishings: <br></br>
          {garnishing}
        </div>
        <hr />
        <div className="">
          Enjoy Also: <br></br>
          {enjoyAlso}
        </div>
      </div>
    </div>
  )
}
