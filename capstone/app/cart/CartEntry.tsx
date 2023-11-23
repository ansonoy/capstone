import React from "react"
import { CartItemWithProduct } from "@/lib/db/cart"
import Image from "next/image"
import Link from "next/link"

type CartEntryProps = {
  cartItem: CartItemWithProduct
}

export default function CartEntry({
  cartItem: { Product, quantity }
}: CartEntryProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="pt-4 p-2 flex flex-col bg-gradient-to-l from-black via-gray-900 to-black text-white rounded hover:scale-[1.05] transition-all group cursor-pointer">
          <Image
            src={Product.imageurl}
            alt={Product.name}
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div>
          <Link href={"/shop/" + Product.id}>{Product.name}</Link>
          <div>Price: ${Product.price}</div>
          <div className="flex items-center gap-3">
            Total:
          </div>

        </div>
      </div>
    </div>
  )
}
