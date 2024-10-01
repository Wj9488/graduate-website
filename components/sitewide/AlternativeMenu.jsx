import { useState, useEffect } from "react";
import { motion as a, AnimatePresence } from "framer-motion";
import Link from "next/link";

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: 0.8 },
  },
};

const menuVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] },
  },
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Modules", path: "/modules" },
  { name: "Contact", path: "/contact" },
];

const AlternativeMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMenuOpen(false); // Automatically close menu when not visible
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <a.button
        className="hover:cursor-pointer lg:hidden fixed top-1 right-2 rounded-lg flex items-center justify-center z-[999]"
        onClick={toggleMenu}
        id="MobileOnly"
        initial="initial"
        animate="visible"
        exit="initial"
        variants={buttonVariants}
      >
        <div
          className={`flex items-center gap-2 py-1 px-2 rounded-lg transition-all duration-500 ease-in-out ${
            isMenuOpen ? "accent__c_black" : "body__background"
          }`}
        >
          <p
            className={`text-base 3xl:text-lg  ${
              isMenuOpen ? "text__c_contrast" : "text__c_black"
            }`}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </p>
          <div className="">
            {isMenuOpen ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                className="fill-[#fafafa]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                className="fill-[#2a2a2a]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </div>
      </a.button>
      <AnimatePresence>
        {isVisible && (
          <a.button
            className="hover:cursor-pointer hidden lg:block fixed top-5 right-[0.75rem] rounded-lg z-[999] shadow-lg"
            initial="initial"
            animate="visible"
            exit="initial"
            variants={buttonVariants}
            onClick={toggleMenu}
            id="DesktopOnly"
          >
            <div
              className={`flex items-center gap-2 py-1 px-2 rounded-lg transition-all duration-500 ease-in-out ${
                isMenuOpen ? "accent__c_black" : "body__background"
              }`}
            >
              <p
                className={`text-base 3xl:text-lg  ${
                  isMenuOpen ? "text__c_contrast" : "text__c_black"
                }`}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </p>
              <div className="">
              {isMenuOpen ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                className="fill-[#fafafa]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                className="fill-[#2a2a2a]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
              </div>
            </div>
          </a.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <a.div
            className="fixed top-0 flex flex-col justify-center right-0 bottom__left_radius xl:rounded-none h-full accent__c_black shadow-2xl z-[500]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <a.ul className="w-[50vw] lg:w-[20vw] xl:w-[20vw] 3xl:w-[15vw] p-5">
              {menuItems.map((item, index) => (
                <a.li
                  key={item.name}
                  className="mt-[.75rem] text-4xl 2xl:text-6xl"
                  variants={{
                    initial: { opacity: 0, y: 10 },
                    enter: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.1 },
                    },
                  }}
                  initial="initial"
                  animate="enter"
                >
                  <Link
                    onClick={toggleMenu}
                    href={item.path}
                    className="transition-all duration-200 ease-in-out hover:opacity-50 text__c_contrast"
                  >
                    {item.name}
                  </Link>
                </a.li>
              ))}
            </a.ul>
          </a.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlternativeMenu;
