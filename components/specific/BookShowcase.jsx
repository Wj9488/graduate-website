import Link from "next/link";
import Image from "next/image";
import { motion as a } from "framer-motion";
import { useState } from "react";

const BookShowcase = ({
  bookTitle,
  imageSrc,
  bookTopic,
  bookLink,
  bookAuthor,
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseX(event.clientX - rect.left - 200); // Adjusting 200 to center the image on the cursor
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
      <div
        className="py-[1rem] lg:py-[2rem] 2xl:py-[2.5rem] grid grid-cols-3 items-center hover__transition cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-base lg:text-3xl xl:text-4xl 2xl:text-5xl ">{bookTitle}</p>
        <p className="text-base lg:text-3xl xl:text-4xl 2xl:text-5xl text__c_reduced_black flex justify-center">{bookTopic}</p>
        <p className="text-base lg:text-3xl xl:text-4xl 2xl:text-5xl text-right">{bookAuthor}</p>
        {isHovering && (
          <a.div
            style={{
              x: mouseX,
              position: 'absolute',
              pointerEvents: 'none',
              zIndex: 10,  
            }}
            initial={{ opacity: 0, scale: 0.75, filter: "blur(25px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{duration: 0.3}}
            exit={{ opacity: 0, scale: 0, filter: "blur(25px)" }}
          >
            <Image
              src={imageSrc}
              alt="Project Image"
              className="shadow-2xl rounded lg:block hidden 2xl:w-[300px] xl:w-[275px] lg:w-[250px]"
              width={300}
              height={"auto"}
              quality={80}
              loading="eager"
            />
          </a.div>
        )}
      </div>
  );
};

export default BookShowcase;