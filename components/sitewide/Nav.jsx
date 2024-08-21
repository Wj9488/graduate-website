import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";
import { motion as a } from "framer-motion";

const Nav = () => {
  const pathname = usePathname();
  const pathMap = {
    "/work": "Work",
    "/about": "About",
    "/contact": "Contact",
    "/blog": "Blog Index",
    "/reading": "Reading",
    "/blog/excode-2023": "Excode 2023",
    "/web-cv": "Web CV"
  };

  const getDisplayWord = (path) => pathMap[path] || "Home";

  const [currentWord, setCurrentWord] = useState(getDisplayWord(pathname));

  useEffect(() => {
    setCurrentWord(getDisplayWord(pathname));
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between accent__c_white transition-colors duration-1000 ease-in-out z-[10]">
      <div className="z-10 py-2 lg:px-[0.75rem] px-[0.5rem] accent__c_white">
        <Link className=" flex items-center" href={"/"}>
          <p className=" 3xl:text-lg font-medium">William Jones</p>
        </Link>
      </div>
      <div className="hidden absolute accent__c_white py-2 lg:px-[0.75rem] px-[0.5rem] ml-[45%] md:flex items-center gap-1 z-[10]">
        <p className="3xl:text-lg xl:block hidden">Page - </p>
        <a.p
          className="text__c_reduced_black 3xl:text-lg xl:block hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={currentWord}
        >
          {currentWord}
        </a.p>
      </div>
      <div className="hidden lg:flex">
        <ul className="z-10 py-2 lg:px-[0.75rem] px-[0.5rem] accent__c_white flex items-center justify-between gap-6">
          <li className="lg:my-[0rem] my-1 3xl:text-lg">
            <Link
              className="pc hover:opacity-50 transition-all duration-200"
              href={"/work"}
            >
              Work
            </Link>
          </li>
          <li className="3xl:text-lg">
            <Link
              className="pc hover:opacity-50 transition-all duration-200"
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li className="3xl:text-lg">
            <Link
              className="pc hover:opacity-50 transition-all duration-200"
              href={"/reading"}
            >
              Reading
            </Link>
          </li>
          <li className="3xl:text-lg">
            <Link
              className="pc hover:opacity-50 transition-all duration-200"
              href={"/blog"}
            >
              Blog
            </Link>
          </li>
          <Link
            className=""
            href={"/contact"}
          >
            <div className="flex items-center gap-2 hover:opacity-50 transition-all duration-200">
              <li className="3xl:text-lg font-medium">Contact Me</li>
              <div className="py-1 px-2 accent__c_main rounded-xl">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.06463 10L6.24432 9.19034L9.62145 5.81321H0.875V4.64133H9.62145L6.24432 1.27486L7.06463 0.454546L11.8374 5.22727L7.06463 10Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
