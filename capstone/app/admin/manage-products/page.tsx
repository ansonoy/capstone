import getProductDash from "@/action/getProductDash"
import ManageProductsClient from "./manageProductsClient"
import { getCurrentUser } from "@/action/getCurrentUser"

const ManageProducts = async () => {
  const products = await getProductDash()
  const currentUser = await getCurrentUser()

  return (
    <div>
      <ManageProductsClient products={products} />
    </div>
  )
}
export default ManageProducts
