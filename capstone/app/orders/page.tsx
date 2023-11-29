import { getOrder } from "@/lib/db/order"
import React from "react"
import OrderEntry from "./OrderEntry"
import Link from "next/link"
import Image from "next/image"

export default async function Orders() {
  const order = await getOrder()

  return (
    <div className="min-h-screen mt-24 mx-16">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <hr className="pb-2" />

      {order?.map((order) => (
        <div>
          <div className="flex justify-between pb-4">
            <div>Order# {order.id} </div>
            <div>
              Total:{" "}
              {order.items.reduce(
                (acc, item) => acc + item.quantity * item.Product.price,
                0.0
              )}
            </div>
          </div>

          {order.items.map((item) => (
            <div className="flex flex-wrap items-center gap-3 mx-2 pb-2">
              <div className="pt-4 p-2 flex flex-col bg-gradient-to-l from-black via-gray-900 to-black text-white rounded hover:scale-[1.05] transition-all group sm:mr-5">
                <Link href={"/shop/" + item.Product.id}>
                  <Image
                    src={item.Product.imageurl}
                    alt={item.Product.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/shop/" + item.Product.id}>
                  {item.Product.name}
                </Link>
                <div>Price: ${item.Product.price.toFixed(2)}</div>
                <div className="my-1 flex items-center gap-2">
                  Quantity: {item.quantity}
                </div>
              </div>
            </div>
          ))}
          <hr className="pb-2" />
        </div>
      ))}
    </div>
  )
}
