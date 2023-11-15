import React from "react"
import prisma from "@/lib/prisma"
import Image from "next/image"
import sigGin from "@/public/signature_gin.png"
import pepVodka from "@/public/peppermint_vodka.png"
import canVodka from "@/public/canadian_vodka.png"
import winRum from "@/public/winter_spice_rum.png"

export default async function Products() {
  const product = await prisma.product.findMany({
    where: { inventory: { gt: 0 } }
  })

  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {product.map((product) => (
          <li className="pt-4 p-2 flex flex-col bg-gradient-to-l from-black via-gray-900 to-black text-white rounded hover:scale-[1.05] transition-all group"
          >
            <Image
              src={sigGin}
              width={300}
              height={700}
              alt="/image/signature_gin.png"
            />
            <div className=" ">{product.name}</div>
            <div className=" ">{product.type}</div>
            <div>
              <hr></hr>
              <hr></hr>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="flex">{product.price}</div>
            </div>
            <div className=" bold rounded">
              <button className="invisible group-hover:visable">
                Add to Cart?
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
