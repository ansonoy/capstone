import Product from "../components/product"
import ginImage from "@/public/signature_gin.png"
import Image from "next/image"
import distillery from "@/public/distillery.png"
import Heading from "../components/heading"
import prisma from "@/lib/prisma"
import Products from "../components/products"

export default async function Shop() {
  return (
    <main>
      <Heading
        image={
          <Image
            src={distillery}
            alt="Barrel Picture"
            quality={95}
            className="w-full object-contain"
          />
        }
        header="Want to buy products?"
      />

      <div className={``}>
        <Products />
      </div>
    </main>
  )
}
