import { getCurrentUser } from "@/action/getCurrentUser"
import AddProductForm from "./AddProductClient"
import AccessDenied from "@/app/components/accessDenied"

const AddProducts = async () => {
  const currentUser = await getCurrentUser()
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <AccessDenied title="Access Denied. Redirecting..." />
  }

  return (
    <div className="p-8">
      <AddProductForm />
    </div>
  )
}
export default AddProducts
