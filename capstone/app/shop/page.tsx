import Product from "../components/product"

export default function Shop() {
  return (
    <div className={`bg-white h-screen flex items-center`}>
      <Product price={30} name="Bottle'O'Gin" type="Gin" percentage={1000} />
    </div>
  )
}
