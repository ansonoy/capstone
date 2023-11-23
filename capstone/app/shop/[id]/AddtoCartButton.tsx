"use client"

import React, { useState, useTransition } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"

type AddtoCartButtonProps = {
  productId: string
  incrementProductQuantity: (
    productId: string,
    quantity: number
  ) => Promise<void>
}

export default function AddtoCartButton({
  productId,
  incrementProductQuantity
}: AddtoCartButtonProps) {
  const [isPending, startTransition] = useTransition()
  const [quantity, setQuantity] = useState<number>(1)

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10)

    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  return (
    <section>
      <h2 className="pb-2">Quantity:</h2>
      <input
        type="number"
        className="text-black rounded-xl h-[rem] w-[5rem] pl-4 bg-gray-200"
        defaultValue="1"
        value={quantity}
        onChange={handleQuantityChange}
        max={10}
        min={1}
      />
      <hr className="my-4 w-2/3" />
      <div className="flex items-center gap-2">
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-2xl ouline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 bg-white bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          onClick={() => {
            startTransition(async () => {
              await incrementProductQuantity(productId, quantity)
            })
          }}
        >
          {isPending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Add to cart{" "}
              <AiOutlineShoppingCart size="20" className="text-xs opacity-70" />
            </>
          )}
        </button>
      </div>
    </section>
  )
}
