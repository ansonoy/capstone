import { notFound } from "next/navigation"
import React, { useState } from "react"
import prisma from "@/lib/prisma"
import Image from "next/image"
import AddtoCartButton from "./AddtoCartButton"
import { incrementProductQuantity } from "./actions"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({
  params: { id }
}: ProductPageProps) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) notFound()


  return (
    <div className="flex justify-center items-center flex-col lg:flex-row h-auto sm:h-screen pb-56 lg:pb-0 lg:pt-0 pt-32">
      <section className="w-full flex lg:justify-end m-4">
        <div className="bg-gradient-to-l from-black via-gray-900 to-black rounded-2xl pb-4 pt-8">
          <Image
            src={product.imageurl}
            width={550}
            height={550}
            alt={product.name}
          />
        </div>
      </section>
      <section className="w-full flex m-4 h-[35rem] flex-col pl-12 lg:pl-0">
        <h1 className="font-semibold text-xl opacity-80">
          Whispering Dutchman
        </h1>
        <h1 className="font-semibold text-5xl">{product.name}</h1>
        <div className="flex gap-6">
          <h2 className="text-2xl pt-8">${product.price}</h2>
          <h2 className="text-md pt-9">
            {product.percentage}%{" "}
            <span className="text-md opacity-80">ALC./VOL.</span>
          </h2>
        </div>
        <p className="text-md w-2/3 pt-12">{product.description}</p>
        <hr className="my-4 w-2/3" />
        
        <AddtoCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </section>
    </div>
  )
}
