import Image from "next/image"
import distillery from "@/public/distillery.png"
import Heading from "../components/heading"
import Products from "../components/products-card"
import getProducts from "@/action/get-products"

export default async function Shop() {
  const products = await getProducts()
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
        <Products product={products} />
      </div>
    </main>
  )
}
