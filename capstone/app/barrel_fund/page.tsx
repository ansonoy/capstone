"use client"

import React from "react"
import Image from "next/image"
import barrel from "@/public/Barrels.png"
import { motion } from "framer-motion"

export default function Barrel_Fund() {
  return (
    <main>
      <div className="h-[100rem] flex flex-col">
        <div className="flex flex-col pt-[4.5rem]">
          <div className="h-[24rem] ">
            <Image
              src={barrel}
              alt="Barrel Picture"
              width={1920}
              height={1000}
              quality={100}
              className=""
            />
          </div>
        </div>
        <div className=" h-full bg-gradient-to-b from-stone-700 to-black text-gray-50 text-opacity-90">
          <motion.div
            className="pt-12 w-full flex justify-center flex-col items-start px-8 pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-5xl pb-8 font-bold">What is the Barrel Fund?</p>
            <p className="flex flex-wrap justify-center text-white/60 text-xl">
              We are proud to formally launch our Whiskey Project/Barrel club.
              Our first Barrel should be ready in October 2023! This date will
              come faster than you can imagine. We are offering a reduced rate
              for the initial 10 investors, of which we have already sold 6
              (thank you!!). Please contact us at 403-830-5663 for more
              information. Thank you!
                      </p>
                      <hr className={`w-full h-0.5 bg-gray-300 mt-12`} />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
