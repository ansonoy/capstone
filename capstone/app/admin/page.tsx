import React from 'react'
import Inventory from '../components/inventory'

export default function Admin() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-xl h-[32rem] w-[32rem] flex flex-col items-center">
        <h1 className="text-black">Inventory</h1>

        <Inventory />
        <form className="flex gap-2 text-black flex-wrap" action={''}>
          <input placeholder="name" type="text" id="name" />
          <input placeholder="price" type="text" id="price" />
          <input placeholder="stock" type="text" id="stock" />
          <button className="bg-gray-400 rounded-lg px-4 text-black">
            add
          </button>
        </form>
      </div>
    </div>
  )
}
