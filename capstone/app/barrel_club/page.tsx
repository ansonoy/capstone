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
            className="w-full z-0"
          />
        }
        header="What is the Barrel Club?"
        text="We are proud to formally launch our Whiskey Project/Barrel club. Our
            first Barrel should be ready in October 2023! This date will come
            faster than you can imagine. We are offering a reduced rate for the
            initial 10 investors, of which we have already sold 6 (thank you!!).
            Please contact us at 403-830-5663 for more information. Thank you!"
      />
   <div className="h-[30rem]"></div>
    </main>
  )
}
