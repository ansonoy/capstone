"use client"

import axios from "axios"
import React, { useEffect } from "react"
import { ShoppingCart } from "@/lib/db/cart"
import { useSearchParams } from "next/navigation"
import toast from "react-hot-toast"




type CheckoutButtonProps = {
  cart: ShoppingCart | null
  deleteCart: (cartId: string) => Promise<void>

}

export default function CheckoutButton({ cart, deleteCart }: CheckoutButtonProps) {
  const searchParams = useSearchParams()
  if (!cart || null) {
    return
  }
  
  useEffect(() => {
    if (searchParams?.get("success")) {
      toast.success("payment completed")
      deleteCart(cart.id)
    }

    if (searchParams?.get("canceled")) {
      toast.error("Something went wrong")
    }
  }, [searchParams])

  const onCheckout = async () => {
    const result = await axios.post(`http://localhost:3000/checkout`)
    window.location.assign(result.data.url)
  }

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-2xl ouline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 bg-orange-500 disabled:scale-100 disabled:bg-opacity-65 sm:w-[200px]"
      onClick={onCheckout}
    >
      Checkout
    </button>
  )
}
