import Marquee from "react-fast-marquee";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative h-[40vh] lg:h-[60vh] z-[99]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[40vh] lg:h-[60vh] w-full accent__c_black">
        <div className="flex justify-between standard__x_padding pt-[2.5rem] xl:pt-[3rem] 2xl:pt-[6rem] 3xl:pt-[10rem]">
          <div>
            <p className="text__c_contrast_reduced_opacity text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              London, UK
            </p>
          </div>
          <div className="flex gap-[2.5rem] justify-between standard__x_padding">
          <div>
              <p className="text__c_contrast_reduced_opacity 2xl:text-lg">
                Pages
              </p>
              <ul className="">
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    href={"/reading"}
                  >
                    Reading
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    href={"/work"}
                  >
                    Work
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    href={"/about"}
                  >
                    About
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    href={"/blog"}
                  >
                    Blog
                  </Link>
                </li>
                
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text__c_contrast_reduced_opacity 2xl:text-lg">
                Socials
              </p>
              <ul className="">
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    target="_blank"
                    href={"https://linkedin.com/in/william-thibaut-jones"}
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="2xl:text-lg">
                  <Link
                    className="text__c_contrast hover:opacity-50 transition-all duration-200"
                    target="_blank"
                    href={"https://github.com/Wj9488"}
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-[2.5rem] xl:pt-[3rem] 2xl:pt-[6rem] 3xl:pt-[10rem]">
          <Marquee speed={110}>
            <p className="text-[8rem] lg:text-[9rem] xl:text-[12rem] 2xl:text-[15rem] 3xl:text-[18rem] text__c_contrast leading-[.85] overflow-y-hidden uppercase">
              William Jones - William Jones - William Jones -
            </p>
            <span className="opacity-0">___</span>
          </Marquee>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
