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
      <div className="z-[999]">
        <Link className="flex items-center mix-blend-difference" href={"/"}>
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
            <div className="flex items-center gap-2 hover:opacity-75 transition-all duration-200 px-4 py-2 button__text_colour shadow accent__c_main rounded">
              <li className="font-medium 2xl:text-base text-sm">Contact Me</li>
              <svg
                      className="w-[17px] h-[17px] fill-[#2a2a2a]"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
