"use client"

import React, { useState, useEffect } from "react"
import { PrismaClient, Product } from "@prisma/client"

const prisma = new PrismaClient()

export default function Inventory() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await prisma.product.findMany()
        setProducts(products)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()

    return () => {
      prisma.$disconnect()
    }
  }, [])

  return (
    <div>
      <h2 className="text-black">Product List</h2>
      <ul>
        {products.map((product) => (
          <li className="text-black" key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
