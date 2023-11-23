"use-client"
import Link from "next/link"
import { useCallback, useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import MenuItem from "./menuItem"
import { signOut } from "next-auth/react"

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <>
      <div className="relative z-30">
        <div onClick={toggleOpen} className="cursor-pointer transition">
          <AiOutlineUser size="24" />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-stone-500 overflow-hidden right-0 top-8 text-sm flex flex-col cursor-pointer">
            <div>
              <Link href="/orders">
                <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
              </Link>
              <Link href="/admin">
                <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  toggleOpen()
                  signOut()
                }}
              >
                Sign out
              </MenuItem>
            </div>
            <div>
              <Link href="/SignIn">
                <MenuItem onClick={toggleOpen}>Sign in</MenuItem>
              </Link>
              <Link href="/Register">
                <MenuItem onClick={toggleOpen}>Register</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default UserMenu
