"use client"
import React from "react"
import Recipe from "../components/recipe"
import ginImage from "@/public/signature_gin.png"
import Image from "next/image"
import Heading from "../components/heading"
import recipes from "@/public/recipes.png"

export default function Recipes() {
  return (
    <main>
      <Heading
        image={
          <Image
            src={recipes}
            alt="Barrel Picture"
            quality={95}
            className="w-full object-contain transition-opacity opacity-0 duration-[1s]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        }
        header="Need help creating cocktails?"
      />
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
    </main>
  )
}
