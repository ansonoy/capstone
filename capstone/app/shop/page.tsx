import Product from "../components/product"
import ginImage from "@/public/signature_gin.png"
import Image from "next/image"

export default function Shop() {
  return (
    <div className={`bg-white h-screen flex items-center`}>
      <Product
        image={
          <Image
            src={ginImage}
            width={50}
            height={50}
            alt="/image/signature_gin.png"
          ></Image>
        }
        price={30}
        name="Bottle'O'Gin"
        type="Gin"
        percentage={1000}
      />
    </div>
  )
}
