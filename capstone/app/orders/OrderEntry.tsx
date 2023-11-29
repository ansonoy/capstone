"use client"

import { CartWithProducts } from "@/lib/db/cart"
import { OrderItemWithProduct, Order } from "@/lib/db/order"
import Link from "next/link"
import Image from "next/image"

type OrderEntryProps = {
  orderItem: OrderItemWithProduct
  order: Order
}

export default function OrderEntry({
  orderItem: { Product, quantity, orderId },
  order
}: OrderEntryProps) {
  return (
    <div>
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
            Quantity: {quantity}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
