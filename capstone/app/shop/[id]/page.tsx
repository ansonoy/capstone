import { notFound } from "next/navigation"
import React from "react"
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
    <div className="flex pt-32 justify-center items-center flex-col lg:flex-row">
      <section className="w-full flex justify-end m-4">
        <div className="bg-gradient-to-l from-black via-gray-900 to-black rounded-2xl pb-4 pt-8">
          <Image src={product.imageurl} width={550} height={550} alt={product.name} />
        </div>
      </section>
      <section className="w-full flex m-4 h-[35rem] flex-col">
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
        <p className="text-lg w-2/3 pt-12 pb-4">{product.description}</p>
        <AddtoCartButton productId={product.id} incrementProductQuantity={incrementProductQuantity}/>
      </section>
    </div>
  )
}
