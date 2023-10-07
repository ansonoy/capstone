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
            width={300}
            height={700}
            alt="/image/signature_gin.png"
          ></Image>
        }
        price={30}
        name="Bottle'O'Gin"
        type="Gin"
        percentage={10}
      />
    </div>
  )
}
