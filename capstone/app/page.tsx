import Image from "next/image"
import NumberInput from "./components/numberInput"

export default function Home() {
  return (
    <main>
      <div className={`flex h-screen items-center justify-center bg-gray-700`}>
        <h1 className={`text-7xl font-semibold`}>
          Whispering Dutchman Distillery
        </h1>
      </div>
      <NumberInput inputValue={10} currentValue={20} />
    </main>
  )
}
