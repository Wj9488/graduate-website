

const TopGradient = ( { gradientToRight, gradientFromLeft} ) => {
  return (
    <div className={`w-full h-[2px] absolute top-0 z-[11] bg-gradient-to-r ${gradientToRight} ${gradientFromLeft}`}></div>
  )
}

export default TopGradient