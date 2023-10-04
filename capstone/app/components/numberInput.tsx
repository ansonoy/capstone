import React from "react"
import Link from "next/link"
import Image from 'next/image'
import WDD from '@/public/WDD.png'
import { motion } from "framer-motion"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"

export default function numberInput() {

const 

 return (
        <input
            type="number"
            value={value ?? ''}
            onChange={onNumberChange}
        />
    );

}

   