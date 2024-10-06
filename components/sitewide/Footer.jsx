import Marquee from "react-fast-marquee";
import Link from "next/link";
import GMTClock from "../specific/GMTClock";
import VariableSizeHeading from "./VariableSizeHeading";

const Footer = () => {
  return (
    <footer
      className="relative h-[85dvh] lg:h-[55dvh] xl:h-[90dvh] 2xl:h-[70dvh] z-[99]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* <div className="standard__x_padding_inner fixed bottom-0 h-[100dvh] w-full bg-gray-300 standard__x_padding">
        <div className="ps-t">
          <p className="font-medium text-2xl lg:text-3xl ">
            William Jones
          </p>
          <p className="_reduced_opacity_drk text-lg">
            London, <GMTClock />
          </p>
        </div> */}

      <div className="fixed bottom-0 h-[85dvh] lg:h-[55dvh] xl:h-[90dvh] 2xl:h-[70dvh] w-full bg-gray-300 standard__x_padding">
        <div className="standard__x_padding pl-t lg:flex items-start justify-between">
          <div className="">
            <p className="font-medium text-2xl lg:text-3xl lg:pb-0 pb-[2.5rem]">
              London, <GMTClock />
            </p>
          </div>
          <div className="">
            <div className="lg:flex items-start justify-between w-full gap-2 lg:gap-[2.5rem] xl:gap-[5rem] 2xl:gap-[7.5rem]">
              <div className="">
                <p className="opacity-15 2xl:text-lg pxs-b">Key Pages</p>
                <ul className="">
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link"
                      href={"/"}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link"
                      href={"/about"}
                    >
                      About
                    </Link>
                  </li>
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link"
                      href={"/work"}
                    >
                      Work
                    </Link>
                  </li>
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link"
                      href={"/blog"}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:pt-0 ps-t lg:block hidden">
                <p className="opacity-15 2xl:text-lg pxs-b">University</p>
                <ul className="">
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link"
                      href={"/modules"}
                    >
                      Modules
                    </Link>
                  </li>
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link"
                      href={"/blog/excode-2023"}
                    >
                      Excode 2023
                    </Link>
                  </li>
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link flex items-center gap-1"
                      href={"https://exeter.ac.uk"}
                      target="_blank"
                    >
                      Exeter University
                      <svg
                        className="w-[17px] h-[17px] lg:w-[19px] lg:h-[19px] fill-[#070707]"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:pt-0 ps-t lg:block hidden">
                <p className="opacity-15 2xl:text-lg pxs-b">Contact Me</p>
                <ul className="">
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link"
                      href={"/contact"}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-50 transition-all duration-200 hover__link flex items-center gap-1"
                      href={
                        "mailto:wtjones10@gmail.com?subject=Let's%20get%20in%20touch"
                      }
                      target="_blank"
                    >
                      Email Me
                      <svg
                        className="w-[17px] h-[17px] lg:w-[19px] lg:h-[19px] fill-[#070707]"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:pt-0 ps-t">
                <p className="opacity-15 2xl:text-lg pxs-b">My Socials</p>
                <ul className="">
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-75 transition-all duration-200 hover__link flex items-center gap-1"
                      target="_blank"
                      href={"https://linkedin.com/in/william-thibaut-jones"}
                    >
                      LinkedIn
                      <svg
                        className="w-[17px] h-[17px] lg:w-[19px] lg:h-[19px] fill-[#070707]"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="2xl:text-lg">
                    <Link
                      className=" hover:opacity-75 transition-all duration-200 hover__link flex items-center gap-1"
                      target="_blank"
                      href={"https://github.com/Wj9488"}
                    >
                      Github
                      <svg
                        className="w-[17px] h-[17px] lg:w-[19px] lg:h-[19px] fill-[#070707]"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-y standard__x_padding">
          <h6 className="font-medium text-[6.5rem] xl:text-[13rem] 2xl:text-[23rem] leading-[1] lg:flex">William&nbsp;<span className="block">Jones</span></h6>
        </div>

        {/* <div className="ps-b">
          <p className=" 2xl:text-lg">
            Made by combining some effort, skill and time. 
            <br />
            <span className="_reduced_opacity_drk">
              {" "}&copy; William
              Jones 2024
            </span>
          </p>
        </div> */}

        {/* <div className="flex justify-between standard__x_padding pt-[2.5rem] xl:pt-[3rem] 2xl:pt-[6rem] 3xl:pt-[10rem]">
          <div>
            <p className="_reduced_opacity_drk text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              London, UK 
              <br />
              <GMTClock />
            </p>
          </div>
          <div className="flex gap-[2.5rem] justify-between standard__x_padding">
          <div>
              <p className="_reduced_opacity_drk 2xl:text-lg">
                Pages
              </p>
              <ul className="">
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    href={"/modules"}
                  >
                    Modules
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    href={"/work"}
                  >
                    Work
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    href={"/about"}
                  >
                    About
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    href={"/blog"}
                  >
                    Blog
                  </Link>
                </li>
                
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="_reduced_opacity_drk 2xl:text-lg">
                Socials
              </p>
              <ul className="">
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    target="_blank"
                    href={"https://linkedin.com/in/william-thibaut-jones"}
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className=" hover:opacity-75 transition-all duration-200 hover__link"
                    target="_blank"
                    href={"https://github.com/Wj9488"}
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="standard__x_padding ps-t">
          <VariableSizeHeading text={"William"} fontSize={"text-[60vw] lg:text-[30vw] lg:pt-[2.5rem] xl:pt-0 "}/>
        </div> */}
        {/* <div className="pt-[2.5rem] xl:pt-[3rem] 2xl:pt-[6rem] 3xl:pt-[10rem]">
          <Marquee speed={200}>
            <p className="text-[8rem] lg:text-[9rem] xl:text-[12rem] 2xl:text-[15rem] 3xl:text-[18rem]  leading-[.85] overflow-y-hidden">
              William Jones - William Jones - William Jones -
            </p>
            <span className="opacity-0">___</span>
          </Marquee>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
