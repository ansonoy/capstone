import React from "react"

import { getCart } from "@/lib/db/cart"
import CartEntry from "./CartEntry"
import { setProductQuantity } from "./actions"

export default async function Cart() {
  const cart = await getCart()

  return (
    <div className="min-h-screen mt-24 mx-16">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <hr className="pb-2"/>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Subtotal: ${cart?.subtotal.toFixed(2) || (0.0).toFixed(2)}
        </p>
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-2xl ouline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 bg-orange-500 disabled:scale-100 disabled:bg-opacity-65 sm:w-[200px]">
          Checkout
        </button>
      </div>
    </div>
  )
}
