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
        text="Choose one of our seasonal recipes that fit your cocktail cravings. From your all year round cocktails to your seasonal cocktails."
      />
      <div className="pb-12">
        <div className={`h-[25rem] flex items-center justify-center pt-24`}>
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
            name="Gin&Tonic"
            description="a simple Gin&Tonic"
            ingredients="gin 1 shot. Tonic 1 can."
            instructions="pour shot of Gin in glass with Tonic"
            garnishing="Add a lime slice to the rim of the glass"
            enjoyAlso="Gin with no Tonic "
          />
        </div>
        <div className={`h-[25rem] flex items-center justify-center pt-24`}>
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
            name="Gin&Tonic"
            description="a simple Gin&Tonic"
            ingredients="gin 1 shot. Tonic 1 can."
            instructions="pour shot of Gin in glass with Tonic"
            garnishing="Add a lime slice to the rim of the glass"
            enjoyAlso="Gin with no Tonic "
          />
        </div>
      </div>
    </main>
  )
}
