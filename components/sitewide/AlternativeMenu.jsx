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
  { name: "Reading", path: "/reading" },
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
        className="hover:cursor-pointer lg:hidden fixed top-1 right-2 rounded-full flex items-center justify-center z-[999]"
        onClick={toggleMenu}
        id="MobileOnly"
        initial="initial"
        animate="visible"
        exit="initial"
        variants={buttonVariants}
      >
<div className={`flex items-center gap-2 py-1 px-2 rounded-full transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "accent__c_black" : "body__background"
                }`}>
              <p
                className={`text-base 3xl:text-lg  ${
                  isMenuOpen ? "text__c_contrast" : "text__c_black"
                }`}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </p>
              <div className="accent__c_main p-2 rounded-full">
                {isMenuOpen ? (
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.646447"
                      y1="8.42379"
                      x2="8.42462"
                      y2="0.645616"
                      stroke="#FAFAFA"
                    />
                    <line
                      x1="0.353553"
                      y1="0.646447"
                      x2="8.13173"
                      y2="8.42462"
                      stroke="#FAFAFA"
                    />
                  </svg>
                ) : (
                  <svg
                    width="11"
                    height="4"
                    viewBox="0 0 11 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4.37113e-08"
                      y1="0.5"
                      x2="11"
                      y2="0.500001"
                      stroke="#FAFAFA"
                    />
                    <line
                      x1="-4.37113e-08"
                      y1="3.5"
                      x2="11"
                      y2="3.5"
                      stroke="#FAFAFA"
                    />
                  </svg>
                )}
              </div>
            </div>
      </a.button>
      <AnimatePresence>
        {isVisible && (
          <a.button
            className="hover:cursor-pointer hidden lg:block fixed top-5 right-[0.75rem] rounded-full z-[999]"
            initial="initial"
            animate="visible"
            exit="initial"
            variants={buttonVariants}
            onClick={toggleMenu}
            id="DesktopOnly"
          >
            <div className={`flex items-center gap-2 py-1 px-2 rounded-full transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "accent__c_black" : "body__background"
                }`}>
              <p
                className={`text-base 3xl:text-lg  ${
                  isMenuOpen ? "text__c_contrast" : "text__c_black"
                }`}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </p>
              <div className="accent__c_main p-2 rounded-full">
                {isMenuOpen ? (
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.646447"
                      y1="8.42379"
                      x2="8.42462"
                      y2="0.645616"
                      stroke="#FAFAFA"
                    />
                    <line
                      x1="0.353553"
                      y1="0.646447"
                      x2="8.13173"
                      y2="8.42462"
                      stroke="#FAFAFA"
                    />
                  </svg>
                ) : (
                  <svg
                    width="11"
                    height="4"
                    viewBox="0 0 11 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4.37113e-08"
                      y1="0.5"
                      x2="11"
                      y2="0.500001"
                      stroke="#FAFAFA"
                    />
                    <line
                      x1="-4.37113e-08"
                      y1="3.5"
                      x2="11"
                      y2="3.5"
                      stroke="#FAFAFA"
                    />
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
            <a.ul className="w-[50vw] xl:w-[20vw] 3xl:w-[15vw] p-5">
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
