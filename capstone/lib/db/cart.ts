import { Prisma } from "@prisma/client"
import prisma from "../prisma"
import { cookies } from "next/dist/client/components/headers"

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { Product: true } } }
}>

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: {Product: true}}>

export type ShoppingCart = CartWithProducts & {
  size: number
  subtotal: number
}

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("localCartId")?.value
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { Product: true } } }
      })
    : null

  if (!cart) {
    return null
  }

  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.Product.price,
      0
    )
  }
}

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {}
  })
  //encrypt later
  cookies().set("localCartId", newCart.id)

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0
  }
}
