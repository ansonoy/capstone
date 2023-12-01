import React from "react"

export default function Home() {
  return (
    <main className={`min-h-screen`}>
      <div className={`h-screen 2xl:h-[46rem] flex flex-col`}>
        <div className="bg-red-500 h-full">
          hello
        </div>
        <div className="flex items-end mx-4 md:mx-8">
          <h1 className={`text-4xl`}>
          WHISPERING DUTCHMAN DISTILLERY
        </h1>
        
        </div>
       
      </div>
      <div>
        <h1 className={`flex justify-center text-4xl font-semibold h-[30rem]`}>
          The Story
        </h1>
      </div>
      <div>
        <h1 className={`flex justify-center text-4xl font-semibold `}>
          Location
        </h1>
        <div className="flex flex-col items-center justify-center w-full h-[30rem]">
          <iframe
            className="flex flex-col items-center justify-center w-5/6 h-5/6 rounded-2xl"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8Tdr8ZVBcVMRowmzju707Q8&key=AIzaSyBYEeWyX2jqtqpSe1AGEUwal1f8dS00zjw"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
