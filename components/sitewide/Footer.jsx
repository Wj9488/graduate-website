import Marquee from "react-fast-marquee";
import Link from "next/link";
import GMTClock from "../specific/GMTClock";
import VariableSizeHeading from "./VariableSizeHeading";

const Footer = () => {
  return (
    <footer
      className="relative h-[65dvh] lg:h-[85dvh] xl:h-[85dvh] 2xl:h-[70dvh] z-[99]"
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

      <div className="fixed bottom-0 h-[65dvh] lg:h-[85dvh] xl:h-[85dvh] 2xl:h-[70dvh] w-full bg-gray-300 standard__x_padding">
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

        {/* <div className="pl-y standard__x_padding">
          <h6 className="font-medium text-[6.5rem] xl:text-[13rem] 2xl:text-[23rem] leading-[1] lg:flex">William&nbsp;<span className="block">Jones</span></h6>
        </div> */}
        <div className="pl-y standard__x_padding">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1272 147"
            fill="none"
            preserveAspectRatio="xMinYMid"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.6 0.599998H26L52 109L81.2 0.599998H106.6L134.8 109L161.6 0.599998H187L147.6 143H122.2L93.4 33.6L64 143H38.2L0.6 0.599998ZM223.267 -6.67572e-06V22.4H200.467V-6.67572e-06H223.267ZM223.267 39.8V143H200.467V39.8H223.267ZM271.509 0.599998V143H248.909V0.599998H271.509ZM319.752 0.599998V143H297.152V0.599998H319.752ZM367.994 -6.67572e-06V22.4H345.194V-6.67572e-06H367.994ZM367.994 39.8V143H345.194V39.8H367.994ZM391.836 71.6C394.236 48.4 409.236 36.6 437.036 36.6C449.836 36.6 460.236 39.2 467.836 44.2C475.436 49.4 479.436 57.2 479.436 67.8V120.2C479.436 123.2 479.636 125.2 480.436 126.2C481.236 127.4 482.636 127.8 484.836 127.8C486.436 127.8 488.036 127.8 490.036 127.4V143.4C484.036 145 479.236 145.6 475.236 145.6C465.436 145.6 459.836 141.6 458.436 133.2C449.636 141.6 437.636 145.6 422.236 145.6C411.436 145.6 403.036 143 396.836 137.4C390.436 131.8 387.436 124.4 387.436 114.8C387.436 112 387.636 109.2 388.436 106.6C389.036 104.2 389.836 102 390.636 100C391.436 98.2 392.836 96.4 394.836 94.8C396.836 93.2 398.436 92 399.636 90.8C400.836 89.8 403.036 88.8 405.836 87.8C408.636 87 410.836 86.2 412.236 85.8C413.636 85.4 416.036 84.8 419.636 84.2C423.036 83.8 425.236 83.4 426.436 83.2C427.636 83 430.036 82.6 433.636 82.2C441.636 81.2 447.236 80.4 450.236 79.6C453.036 78.8 455.036 77.8 456.236 76.2C457.036 75.2 457.636 72.8 457.636 68.8C457.636 58.4 450.436 53.2 436.436 53.2C428.836 53.2 423.436 54.6 420.036 57.4C416.436 60.2 414.236 65 413.436 71.6H391.836ZM457.436 91.2C455.636 92.2 453.636 93 451.436 93.8C449.036 94.6 447.236 95 445.836 95.2C444.436 95.4 442.236 95.6 439.236 96C436.236 96.4 434.236 96.8 433.436 96.8C430.636 97.2 428.436 97.6 426.836 98C425.236 98.4 423.236 98.8 420.836 99.6C418.436 100.4 416.636 101.4 415.436 102.6C414.236 103.8 413.036 105.2 412.236 107.2C411.236 109.2 410.836 111.4 410.836 114C410.836 119 412.436 122.8 415.636 125.4C418.836 128.2 423.436 129.4 429.436 129.4C439.436 129.4 447.236 126.8 452.836 121.2C455.836 118.2 457.436 112.2 457.436 103.4V91.2ZM525.769 39.8V54.4C534.169 42.8 544.969 37 558.169 37C564.969 37 570.769 38.6 575.769 41.6C580.769 44.8 584.569 49 586.969 54.6C595.169 43 606.369 37 620.369 37C629.969 37 638.169 40 644.569 45.8C650.969 51.6 654.169 59.6 654.169 69.8V143H631.369V79.6C631.369 72.4 629.969 66.6 627.569 62.4C624.969 58.4 620.169 56.2 612.969 56.2C605.569 56.2 599.969 58.6 596.169 63.2C592.169 67.8 590.369 74.2 590.369 82.4V143H567.569V78.4C567.569 71.2 566.369 65.6 564.169 61.8C561.969 58.2 557.369 56.2 550.569 56.2C542.769 56.2 536.969 58.8 532.969 63.8C528.969 68.8 526.969 75.4 526.969 83.6V143H504.169V39.8H525.769ZM815.656 0.599998V100.8C815.656 115.8 811.856 127.2 804.456 134.8C797.056 142.6 786.256 146.4 771.856 146.4C755.656 146.4 744.056 142.4 737.056 134.2C730.056 126.2 726.656 114.2 726.656 98.4V93H750.456V100.8C750.456 109 751.856 115.2 754.856 119.6C757.656 124 763.056 126 771.056 126C774.656 126 777.656 125.6 780.256 124.4C782.656 123.2 784.656 122 786.056 120.4C787.256 118.8 788.256 116.6 789.056 113.8C789.856 111 790.256 108.6 790.456 106.4C790.456 104.2 790.656 101.2 790.656 97.4V0.599998H815.656ZM888.878 36.8C904.478 36.8 917.078 41.8 926.478 51.6C935.678 61.6 940.478 74.8 940.478 91.4C940.478 108.2 935.678 121.6 926.478 131.4C917.278 141.4 904.678 146.2 888.878 146.2C872.678 146.2 859.878 141.4 850.478 131.4C840.878 121.6 836.278 108.2 836.278 91.4C836.278 74.8 840.878 61.6 850.478 51.6C860.078 41.8 872.878 36.8 888.878 36.8ZM888.478 54.8C879.278 54.8 872.278 58.2 867.078 64.6C861.878 71.2 859.278 80.2 859.278 91.4C859.278 103 861.878 112.2 867.078 118.6C872.278 125.2 879.478 128.4 888.678 128.4C897.478 128.4 904.478 125.2 909.678 118.6C914.878 112 917.478 102.8 917.478 91.2C917.478 80 914.878 71 909.678 64.6C904.478 58.2 897.478 54.8 888.478 54.8ZM981.433 39.8V55C989.633 43 1001.03 37 1015.63 37C1027.23 37 1036.03 40.2 1041.83 46.6C1047.63 53 1050.63 62.2 1050.63 74.2V143H1027.83V83C1027.83 79 1027.63 75.6 1027.23 72.8C1026.83 70 1025.83 67.2 1024.63 64.4C1023.43 61.6 1021.43 59.6 1018.63 58.2C1015.83 56.8 1012.23 56 1007.83 56C991.033 56 982.633 66.6 982.633 87.4V143H959.833V39.8H981.433ZM1166.88 110.8C1164.28 122 1158.68 130.8 1150.28 137C1141.88 143.4 1131.68 146.4 1120.08 146.4C1104.48 146.4 1092.08 141.4 1082.88 131.4C1073.68 121.4 1069.28 108.4 1069.28 92.6C1069.28 76.6 1073.88 63.2 1083.28 52.6C1092.68 42.2 1104.68 36.8 1119.28 36.8C1134.28 36.8 1146.28 42 1155.08 52.4C1163.88 62.8 1168.28 76.8 1168.28 94.6V97H1092.08C1092.28 107.4 1094.88 115.6 1099.88 121.2C1104.68 126.8 1111.68 129.6 1120.48 129.6C1126.68 129.6 1131.68 128.2 1135.68 125.2C1139.68 122.2 1142.68 117.4 1145.08 110.8H1166.88ZM1145.48 81.8C1144.68 73.2 1142.08 66.4 1137.28 61.4C1132.48 56.4 1126.48 53.8 1119.08 53.8C1111.48 53.8 1105.48 56.2 1100.88 61C1096.28 65.8 1093.48 72.8 1092.48 81.8H1145.48ZM1267.41 69.8H1245.61C1244.21 59 1236.81 53.4 1223.21 53.4C1217.21 53.4 1212.81 54.6 1209.61 56.6C1206.41 58.8 1204.81 61.8 1204.81 65.4C1204.81 66.6 1204.81 67.8 1205.01 68.6C1205.21 69.6 1205.61 70.4 1206.21 71.2C1206.81 72 1207.41 72.6 1207.81 73C1208.21 73.6 1209.21 74.2 1210.41 74.6C1211.61 75.2 1212.41 75.6 1213.21 76C1214.01 76.4 1215.21 76.8 1217.01 77.2C1218.61 77.6 1220.01 78 1221.01 78.2C1222.01 78.6 1223.61 79 1226.01 79.4C1228.21 79.8 1230.01 80.2 1231.21 80.4C1236.41 81.6 1240.01 82.6 1242.41 83.2C1244.81 83.8 1248.21 85 1252.61 86.8C1257.01 88.6 1260.41 90.4 1262.61 92.4C1264.61 94.4 1266.61 97 1268.41 100.4C1270.21 103.8 1271.21 107.6 1271.21 112C1271.21 122.4 1267.01 130.8 1259.01 136.8C1250.81 143 1239.81 146 1226.21 146C1211.41 146 1200.21 143 1192.41 136.8C1184.41 130.8 1180.21 121.8 1179.81 110H1201.61C1202.81 123 1211.01 129.4 1226.61 129.4C1233.21 129.4 1238.61 128.2 1242.61 125.4C1246.61 122.6 1248.81 119 1248.81 114.4C1248.81 112.2 1248.21 110.2 1247.21 108.6C1246.21 107 1244.61 105.8 1242.41 104.6C1240.01 103.4 1237.81 102.6 1235.81 102C1233.81 101.4 1231.01 100.6 1227.61 99.8L1226.41 99.6C1226.01 99.6 1225.81 99.4 1225.41 99.4C1225.01 99.4 1224.61 99.2 1224.21 99C1209.41 95.4 1200.21 92.6 1196.21 90.6C1186.61 86.2 1182.01 78.6 1182.01 68C1182.01 58.4 1185.61 50.8 1193.21 45.2C1200.61 39.6 1211.01 36.8 1224.21 36.8C1236.81 36.8 1247.21 39.6 1255.21 45C1263.21 50.6 1267.41 58.8 1267.41 69.8Z"
              fill="#3A3A3A"
            />
          </svg>
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
