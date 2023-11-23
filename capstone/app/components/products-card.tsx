"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Product } from "@/lib/types"

type ProductsProps = {
  product: Product[]
}

export default function Products({ product }: ProductsProps) {
  const router = useRouter()

  return (
    <section>
      <ul className="flex flex-wrap gap-3 justify-center text-lg text-gray-800">
        {product.map((product) => (
          <div
            className="pt-4 p-2 flex flex-col bg-gradient-to-l from-black via-gray-900 to-black text-white rounded hover:scale-[1.05] transition-all group"
            onClick={() => {
              router.push(`/shop/${product.id}`)
            }}
          >
            <Image
              src={product.imageurl}
              width={300}
              height={300}
              alt={product.name}
            />
            <div className=" ">{product.name}</div>
            <div className=" ">{product.type}</div>
            <div>
              <hr></hr>
              <hr></hr>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex">${product.price}</div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  )
}
