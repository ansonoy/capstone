import React from "react"

interface DoublePaneProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
}

const DoublePane: React.FC<DoublePaneProps> = ({
  leftContent,
  rightContent
}) => {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">{leftContent}</div>
      <div className="w-1/2 p-4">{rightContent}</div>
    </div>
  )
}

export default DoublePane
