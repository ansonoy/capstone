import AdminNav from "../components/admin/adminNav"

export const metadata = {
  title: "WDD Admin",
  description: "WDD Admin Dashboard"
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminNav />
      {children}
    </>
  )
}

export default AdminLayout
