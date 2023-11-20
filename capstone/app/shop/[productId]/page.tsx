import getProduct from "@/action/get-product"
import React from "react"

interface ProductPageProps {
  params: {
    productId: number
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId)
  return <div className="h-screen">hello</div>
}

export default ProductPage
