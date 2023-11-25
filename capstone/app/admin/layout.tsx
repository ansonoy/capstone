import { getCurrentUser } from "@/action/getCurrentUser"
import Admin from "./page"

const AdminLayout = async () => {
    const currentUser = await getCurrentUser()
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Admin currentUser={currentUser} />
      </div>
    </>
  )
}
export default AdminLayout
