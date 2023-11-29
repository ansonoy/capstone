"use client"
import { formatPrice } from "@/util/formatPrice"
import { Product } from "@prisma/client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import type {} from "@mui/x-data-grid/themeAugmentation"
import ActionButton from "@/app/components/actionButton"
import { MdCached, MdDeleteForever } from "react-icons/md"

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

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerClassName: ""
    },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "price",
      headerName: "Price",
      width: 100
    },
    { field: "type", headerName: "Type", width: 100 },
    { field: "imageUrl", headerName: "Image", width: 170 },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionButton icon={MdCached} onClick={() => {}} />
            <ActionButton icon={MdCached} onClick={() => {}} />
            <ActionButton icon={MdDeleteForever} trash onClick={() => {}} />
          </div>
        )
      }
    }
  ]

  return (
    <div className="">
      <DataGrid
        className="bg-stone-200"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
export default ManageProductsClient
