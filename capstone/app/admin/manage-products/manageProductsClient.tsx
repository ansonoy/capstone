"use client"
import { formatPrice } from "@/util/formatPrice"
import { Product } from "@prisma/client"
import { DataGrid } from '@mui/x-data-grid'

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
      <>
          <DataGrid
  rows={rows}
  columns={columns}
  initialState={{
    pagination: {
      paginationModel: { page: 0, pageSize: 5 },
    },
  }}
  pageSizeOptions={[5, 10]}
  checkboxSelection
/>
          
    </>
  )
}
export default ManageProductsClient
