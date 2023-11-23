"use-client"
import Link from "next/link"
import { useCallback, useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import MenuItem from "./menuItem"
import { signOut } from "next-auth/react"
import BackDrop from "./backDrop"
import { SafeUser } from "@/types"

interface UserMenuProps {
  currentUser: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <>
      <div className="relative z-30">
        <div onClick={toggleOpen} className="cursor-pointer transition">
          {currentUser ? (
            <AiOutlineUser size="24" className="text-orange-500 hover:scale-110 transition" />
          ) : (
            <AiOutlineUser size="24" />
          )}
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-stone-500 overflow-hidden right-0 top-8 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href="/admin">
                  <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen()
                    signOut()
                    console.log("signed out")
                  }}
                >
                  Sign out
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/signIn">
                  <MenuItem onClick={toggleOpen}>Sign in</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  )
}
export default UserMenu
