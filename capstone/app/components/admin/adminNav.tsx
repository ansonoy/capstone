import Link from "next/link"

const AdminNav = () => {
  return (
    <nav
      className={`px-auto py-4 fixed top-0 left-0 right-0 backdrop-blur-lg z-[999]`}
    >
      <ul className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-xs sm:text-base md:text-lg font-semibold">
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/cart">
            <div className=""></div>
          </Link>
        </li>
        <li>
          <div className=""></div>
        </li>
      </ul>
    </nav>
  )
}
export default AdminNav
