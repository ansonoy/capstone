"use client"
import React from "react"
import Image from "next/image"
import barrel from "@/public/Barrels.png"
import Heading from "../components/heading"

export default function Barrel_Club() {
  return (
    <main className="">
      <Heading
        image={
          <Image
            src={barrel}
            alt="Barrel Picture"
            quality={95}
            className="w-full z-0 transition-opacity opacity-0 duration-[1s]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        }
        header="What is the Barrel Club?"
        text="We are proud to formally launch our Whiskey Project/Barrel club. Our
            first Barrel should be ready in October 2023! This date will come
            faster than you can imagine. We are offering a reduced rate for the
            initial 10 investors, of which we have already sold 6 (thank you!!).
            Please contact us at 403-830-5663 for more information. Thank you!"
      />
      <div className="h-[30rem] flex flex-col">
        <div>Barrel Club 1400</div>
        <div>CA$1,400.00</div>
        <div>What you get!</div>
        <div>24 (750ml) custom labeled bottles. - Valued at $74.95/bottle.</div>
        <div>
          4 (375) ml bottles per year, for three years, of our current or new
          release Gin and Vodka. Valued at $24.95/ bottles.
        </div>
      </div>
    </main>
  )
}
