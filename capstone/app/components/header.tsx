"use client"
import React from "react"
import Link from "next/link"
import Image from 'next/image'
import WDD from '@/public/WDD.png'
import { motion } from "framer-motion"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"

export default function Header() {
  return (
    <nav
      className={`px-auto py-4 fixed top-0 left-0 right-0 backdrop-blur-lg z-[999]`}
    >
      <ul className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-xs sm:text-base md:text-lg font-semibold">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/">
            <Image
              src={WDD}
              width={36}
              height={36}
              alt="/images/WDD.png"
            ></Image>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/">The Story</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/">Location</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/barrel_fund">Barrel Fund</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/shop">Shop</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/recipes">Recipes</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/contact">Contact</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/cart">
            <AiOutlineShoppingCart size="24" />
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/account">
            <AiOutlineUser size="24" />
          </Link>
        </motion.li>
      </ul>
    </nav>
  )
}
