import React, { useEffect, useRef } from "react";
import { motion as a, useAnimation, useInView } from "framer-motion";

const VariableSizeHeading = ({ text, fontSize }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const words = text.split(" ");

  const variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(15px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <h1
      ref={ref}
      className={`font-medium leading-[1] ${fontSize}`}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <a.span
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.25, delay: 0.25 + index * 0.05 }}
            style={{ display: "inline-block" }}
          >
            {word}
          </a.span>
          {index < words.length - 1 && (
            <span style={{ display: "inline-block", width: "0.25em" }}></span>
          )}
        </React.Fragment>
      ))}
    </h1>
  );
};

export default VariableSizeHeading;