import React from "react"
import Recipe from "../components/recipe"
import ginImage from "@/public/signature_gin.png"
import Image from "next/image"

export default function Recipe() {
  return (
    <div className={`bg-grey h-screen flex items-center `}>
      <Recipe
              image={
                  <div>
                    <Image
                src={ginImage}
                width={300}
                height={700}
                alt="/image/signature_gin.png"
                ></Image>    
                  </div>

        }
        name="Bottle'O'Gin"
        description="recipe"
      />
    </div>
  )
}
