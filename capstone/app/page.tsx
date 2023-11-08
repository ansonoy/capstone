import Image from "next/image"
import NumberInput from "./components/numberInput"
import React from "react"
/**import GoogleMapComponent from "./components/map" */

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
        <div id="map">
            
        </div>
        

      </div>
    </main>
  )
}

let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();