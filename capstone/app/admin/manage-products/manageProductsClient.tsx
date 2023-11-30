"use client"
import { formatPrice } from "@/util/formatPrice"
import { Product } from "@prisma/client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import type {} from "@mui/x-data-grid/themeAugmentation"
import ActionButton from "@/app/components/actionButton"
import { MdCached, MdDeleteForever, MdRemoveRedEye } from "react-icons/md"
import Status from "@/app/components/status"
import { TbBottle, TbBottleOff } from "react-icons/tb"
import { useCallback } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

interface ManageProductsClientProps {
  products: Product[]
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products
}) => {
  const router = useRouter()
  let rows: any = []
  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        inventory: product.inventory,
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
    {
      field: "inventory",
      headerName: "Inventory",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inventory === true ? (
              <Status
                text="In Stock"
                icon={TbBottle}
                bg="bg-emerald-400"
                color="text-black"
              />
            ) : (
              <Status
                text="Out of Stock"
                icon={TbBottleOff}
                bg="bg-red-400"
                color="text-black"
              />
            )}
          </div>
        )
      }
    },
    { field: "imageUrl", headerName: "Image", width: 170 },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionButton
              icon={MdCached}
              onClick={() => {
                toggleStock(params.row.id, params.row.inventory)
              }}
            />
            <ActionButton icon={MdRemoveRedEye} onClick={() => {}} />
            <ActionButton icon={MdDeleteForever} trash onClick={() => {}} />
          </div>
        )
      }
    }
  ]

  const toggleStock = useCallback((id: string, inventory: boolean) => {
    axios
      .put("/api/product", {
        id,
        inventory: !inventory
      })
      .then((res) => {
        toast.success("Stock updated.")
        router.refresh()
      })
      .catch((err) => {
        toast.error("An error occurred.")
        console.log(err)
      })
  }, [])

  const deleteProduct = useCallback((id: string, inventory: boolean) => {
    
  }, [])

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
