"use client"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <nav
      className={`px-auto py-4 fixed top-0 left-0 right-0 backdrop-blur-lg z-[999]`}
    >
      <ul className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-xs sm:text-base md:text-lg font-semibold">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/">Header</Link>
        </motion.li>
      </ul>
    </nav>
  )
}
