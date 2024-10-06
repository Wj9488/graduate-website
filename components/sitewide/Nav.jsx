import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { motion as a } from "framer-motion";

const Nav = ({ NavPageWordColour, NavPageIdentifierColour, NavTextColour}) => {
  const pathname = usePathname();
  const pathMap = {
    "/work": "Work",
    "/about": "About",
    "/contact": "Contact",
    "/blog": "Blog",
    "/modules": "Modules",
    "/blog/excode-2023": "Excode 2023",
    "/blog/a-simple-explanation-of-fractional-reserve-banking-and-its-impacts": "Fractional Reserve Banking",
    "/blog/lessons-from-charlie-munger-a-summary-of-talk-11-the-psychology-of-human-misjudgement": "Talk 11, Summary", 
    "/learning": "Learning"
  };

  const getDisplayWord = (path) => pathMap[path] || "Home";

  const [currentWord, setCurrentWord] = useState(getDisplayWord(pathname));

  useEffect(() => {
    setCurrentWord(getDisplayWord(pathname));
  }, [pathname]);

  return (
    <nav className={`${NavTextColour} lg:min-h-[5dvh] 2xl:min-h-[2.5dvh] flex items-center justify-between transition-colors duration-1000 ease-in-out z-[10] lg:px-[1.75rem] 2xl:px-[2.25rem] px-[0.5rem]`}> 
      <div className="z-10">
        <Link className="flex items-center" href={"/"}>
          <span className="py-2 2xl:text-lg font-medium" aria-label="Click here to go back to the home page">William Jones</span>   
        </Link>
      </div>
      <div className="hidden absolute ml-[45%] md:flex items-center gap-1 z-[10]">
        <p className={`${NavPageWordColour} 3xl:text-lg xl:block hidden`}>Page - </p>
        <a.p
          className={`${NavPageIdentifierColour} 3xl:text-lg xl:block hidden`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={currentWord}
        >
          {currentWord}
        </a.p>
      </div>
      <div className="hidden lg:flex">
        <ul className="z-10 py-2 flex items-center justify-between gap-6">
          <li className="lg:my-[0rem] my-1 3xl:text-lg">  
            <Link
              className="pc hover:opacity-75 transition-all duration-200 hover__link_b"
              href={"/work"}
            >
              Work
            </Link>
          </li>
          <li className="3xl:text-lg">
            <Link
              className="pc hover:opacity-75 transition-all duration-200 hover__link_b"
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li className="3xl:text-lg">
            <Link
              className="pc hover:opacity-75 transition-all duration-200 hover__link_b"
              href={"/modules"}
            >
              Modules
            </Link>
          </li>
          <li className="3xl:text-lg">
            <Link
              className="pc hover:opacity-75 transition-all duration-200 hover__link_b"
              href={"/blog"}
            >
              Blog
            </Link>
          </li>
          <Link
            className=""
            href={"/contact"}
          >
            <div className="hover:opacity-75 transition-all duration-200 px-4 py-2 button__text_colour shadow accent__c_main rounded">
              <li className="2xl:text-base text-sm">Contact Me</li>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
