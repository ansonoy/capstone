import React from "react"
import { Product } from "@/lib/types"
import prisma from "@/lib/prisma"

const getProducts = async (): Promise<Product[]> => {
  const products = await prisma.product.findMany({
    where: { inventory: { gt: 0 } }
  })

  return products
}

export default getProducts
