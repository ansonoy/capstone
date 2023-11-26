"use client"
import { SafeUser } from "@/types"
import Image from "next/image"
import WDD from "@/public/WDDbig.svg"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import AdminNav from "../components/admin/adminNav"

interface AdminProps {
  currentUser: SafeUser | null
}

const Admin: React.FC<AdminProps> = ({ currentUser }) => {
  const router = useRouter()

  useEffect(() => {
    if (currentUser?.role !== "ADMIN") {
      router.push("/")
      router.refresh()
    }
  }, [])

  if (currentUser?.role !== "ADMIN") {
    return (
      <div className="container relative flex h-screen flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image
              src={WDD}
              width={250}
              height={250}
              alt="/images/WDD.png"
              className=""
            ></Image>
            <h1 className="text-2xl font-bold text-red-600">
              Access Denied. Redirecting...
            </h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <AdminNav />
      <div className="">truth cock</div>
    </>
  )
}
export default Admin
