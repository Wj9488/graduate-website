import { motion as a, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const AnimatedLgText = ({ text, extraCss }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const words = text.split(" ");

  const variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(15px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)"},
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <p
      ref={ref}
      className={`text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1] ${extraCss}`}
    >
      {words.map((word, index) => (
        <a.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.25, delay: 0.25 + index * 0.025 }}
          style={{ display: "inline-block", }}
        >
          {word}&nbsp;
        </a.span>
      ))}
    </p>
  );
};

export default AnimatedLgText;
