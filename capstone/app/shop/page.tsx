import Product from "../components/product"
import ginImage from "@/public/signature_gin.png"
import Image from "next/image"
import distillery from "@/public/distillery.png"
import Heading from "../components/heading"

export default function Shop() {
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

      <div className={`flex items-center justify-center px-4 space-x-2`}>
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
    </main>
  )
}
