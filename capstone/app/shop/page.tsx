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
        header="Shop"
        text="Explore our exclusive shop page, where you can elevate your collection with the crisp allure of our signature vodka and the botanical symphony of our artisanal gin; each bottle is a celebration of quality and flavor, embodying the essence of extraordinary craftsmanship."
      />
      <div className="w-full flex justify-center py-8 px-4">
        <Products product={products} />
      </div>
    </main>
  )
}
