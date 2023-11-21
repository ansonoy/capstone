"use client"

import React from "react"
import Image from "next/image"
import sigGin from "@/public/signature_gin.png"
import pepVodka from "@/public/peppermint_vodka.png"
import canVodka from "@/public/canadian_vodka.png"
import winRum from "@/public/winter_spice_rum.png"
import { useRouter } from "next/navigation"
import { Product } from "@/lib/types"
import { useProductIdContext } from "@/context/product-id-context"

type ProductsProps = {
  product: Product[]
}

export default function Products({ product }: ProductsProps) {
  const router = useRouter()
  const { setProductId } = useProductIdContext()

  return (
    <section>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {product.map((product) => (
          <div
            className="pt-4 p-2 flex flex-col bg-gradient-to-l from-black via-gray-900 to-black text-white rounded hover:scale-[1.05] transition-all group"
            onClick={() => {
              router.push(`/shop/${product?.id}`)
              setProductId(product.id)
            }}
          >
            <Image
              src={sigGin}
              width={300}
              height={700}
              alt="product image"
            />
            <div className=" ">{product.name}</div>
            <div className=" ">{product.type}</div>
            <div>
              <hr></hr>
              <hr></hr>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="flex">{product.price}</div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  )
}
