import { motion as a } from "framer-motion"

const TopGradient = ( { gradientToRight, gradientFromLeft} ) => {
  const animation = {
    hidden: { width:"0%", filter: "blur(5px)" },
    visible: { width: "100%", filter: "blur(0px)"}
  };
  return (
    <a.div className={`w-full h-[2px] absolute top-0 z-[11] bg-gradient-to-r ${gradientToRight} ${gradientFromLeft}`}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3, duration: 0.5 }}  
    variants={animation}
    ></a.div>
  )
}

export default TopGradient