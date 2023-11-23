import React from 'react'

import { getCart } from '@/lib/db/cart'
import CartEntry from './CartEntry'

export default async function Cart() {
  const cart = await getCart()

  return (
    <div className='h-screen mt-24'>
      <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>
      {cart?.items.map(cartItem => (
        <CartEntry cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  )
}
