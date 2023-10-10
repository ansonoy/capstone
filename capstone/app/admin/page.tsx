import React from 'react'
import Inventory from '../components/inventory'

export default function Admin() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-xl h-[32rem] w-[32rem] flex flex-col items-center">
        <h1 className="text-black">Inventory</h1>

        <Inventory />
        <button className="bg-gray-400 rounded-lg px-4 text-black">save</button>
      </div>
    </div>
  )
}
