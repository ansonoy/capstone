"use client"

import React, { useTransition } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"

type AddtoCartButtonProps = {
  productId: string
  incrementProductQuantity: (productId: string) => Promise<void>
}

export default function AddtoCartButton({
  productId,
  incrementProductQuantity
}: AddtoCartButtonProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <div className="flex items-center gap-2">
      <button
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-2xl ouline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 bg-white bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        onClick={() => {
          startTransition(async () => {
            await incrementProductQuantity(productId)
          })
        }}
      >
        {isPending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Add to cart <AiOutlineShoppingCart size="20" className="text-xs opacity-70" />
          </>
        )}
      </button>
    </div>
  )
}
