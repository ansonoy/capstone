"use client"

import { DataTableDemo } from "@/app/components/ui/dataTable"
import { formatPrice } from "@/util/formatPrice"
import { Product } from "@prisma/client"

interface ManageProductsClientProps {
  products: Product[]
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products
}) => {
  let rows: any = []
  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        type: product.type,
        imageUrl: product.imageurl
      }
    })
  }
  return (
    <div>
      <DataTableDemo />
    </div>
  )
}
export default ManageProductsClient
