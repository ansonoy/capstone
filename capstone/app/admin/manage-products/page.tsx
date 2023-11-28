import getProductDash from "@/action/getProductDash"
import ManageProductsClient from "./manageProductsClient"

const ManageProducts = async () => {
  const products = await getProductDash({ category: null })

  return (
    <>
      <ManageProductsClient products={products} />
    </>
  )
}
export default ManageProducts
