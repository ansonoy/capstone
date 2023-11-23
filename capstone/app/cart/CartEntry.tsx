"use client"

import React, { useTransition } from "react"
import { CartItemWithProduct } from "@/lib/db/cart"
import Image from "next/image"
import Link from "next/link"

type CartEntryProps = {
  cartItem: CartItemWithProduct
  setProductQuantity: (productId: string, quantity: number) => Promise<void>
}

export default function CartEntry({
  cartItem: { Product, quantity },
  setProductQuantity
}: CartEntryProps) {
  const [isPending,startTransition] = useTransition()

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mx-2 pb-2">
        <div className="pt-4 p-2 flex flex-col bg-gradient-to-l from-black via-gray-900 to-black text-white rounded hover:scale-[1.05] transition-all group sm:mr-5">
          <Link href={"/shop/" + Product.id}>
            <Image
              src={Product.imageurl}
              alt={Product.name}
              width={200}
              height={200}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div>
          <Link href={"/shop/" + Product.id}>{Product.name}</Link>
          <div>Price: ${Product.price.toFixed(2)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <input
              type="number"
              className="text-black rounded-md h-[2.5rem] w-[4rem] pl-4 bg-gray-200"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value)
                startTransition(async () => {
                  await setProductQuantity(Product.id, newQuantity)
                })
              }}
              max={10}
              min={0}
            />
          </div>

          <div className="flex items-center gap-3">
            Total: ${Product.price * quantity}
            {isPending && (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            )}
          </div>
        </div>
      </div>
      <hr className="pb-2" />
    </div>
  )
}
