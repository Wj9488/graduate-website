import { motion as a, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const CommonHeader = ({ headerText, extraCss }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const words = headerText.split(" ");

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
    <h1
      ref={ref}
      className={`font-medium text-[2.25rem] lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4.75rem] leading-[1] ${extraCss}`}
    >
      {words.map((word, index) => (
        <a.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.25, delay: 0.25 + index * 0.05 }}
          style={{ display: "inline-block", }}
        >
          {word}&nbsp;
        </a.span>
      ))}
    </h1>
  );
};

export default CommonHeader;
