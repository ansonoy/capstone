import React from "react"

export interface NumberInputProps {
  currentValue?: number
  inputValue?: number
}

export default function NumberInput({
  currentValue,
  inputValue
}: NumberInputProps) {
  return (
    <div className="flex flex-row text-lime-400">
      <input type="number" value={inputValue ?? ""} />
      <div>
        <h1>{currentValue}</h1>
      </div>
    </div>
  )
}
