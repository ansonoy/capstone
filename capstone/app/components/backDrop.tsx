interface BackDropProps{
    onClick: () => void
}

const BackDrop: React.FC<BackDropProps> = ({onClick}) => {
  return (
    <div onClick={onClick} className="z-20 bg-stone-400 opacity-50 w-screen h-screen fixed top-0 left-0 backdrop-blur-lg"></div>
  )
}
export default BackDrop