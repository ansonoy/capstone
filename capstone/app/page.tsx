import Image from "next/image"
import NumberInput from "./components/numberInput"

export default function Home() {
  return (
    <main className={``}>
      <div className={`flex flex-row h-screen items-center justify-center`}>
        <h1
          className={`text-5xl sm:text-7xl font-semibold flex flex-col`}
        >
          <p>Whispering</p> <p>Dutchman</p> <p>Distillery</p>
        </h1>
      </div>
      <div>
        <h1 className={`flex justify-center text-4xl font-semibold h-[30rem]`}>
          The Story
        </h1>
      </div>
      <div>
        <h1 className={`flex justify-center text-4xl font-semibold h-[30rem]`}>
          Location
        </h1>
      </div>
    </main>
  )
}
