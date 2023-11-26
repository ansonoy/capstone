import { getCurrentUser } from "@/action/getCurrentUser"
import Admin from "./page"

export const metadata = {
    title: "WDD Admin Dashboard",
    description: "WDD Admin Dashboard"
}

const AdminLayout = async ({ children }: {children : React.ReactNode}) => {
    const currentUser = await getCurrentUser()
  return (
    <>
      <div className="h-screen flex justify-center items-center">
              <Admin currentUser={currentUser} children={children} />
      </div>
    </>
  )
}
export default AdminLayout
