import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import HeaderLayout from "@/components/sitewide/HeaderLayout";
import GradientLetterLeft from "@/components/specific/GradientLetterLeft";

import { motion as a, useScroll, useTransform, useInView } from "framer-motion";

import Image from "next/image"
import ContactPageImage from "../public/images/contact__page_main_img.jpg"

import Link from "next/link"

const Contact = () => {
  const { scrollYProgress } = useScroll();

  const letterTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);  
  const regulateBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(0px)"]
  );
  return (
    <>
      <PageMetadata PageTitle={"Contact"} />
      <main className="overflow-x-hidden">
        {/* <TopGradient gradientFromLeft={"from-[#ff0f7b]"} gradientToRight={"to-[#f89b29]"}/> */}
        <Nav />
        <HeaderLayout 
          HeaderMainTitle={"If you want to work together or just want to say hi, feel free to drop me a line."}
          HeaderMediumText={"Let's get in touch"}
          HeaderSecondarySmallText={"London, UK"}
          HeaderMediumTextGray={""}
        />
        <section className="pt-[2.5rem] pb-[6rem] lg:py-[8rem] 2xl:py-[15rem] 3xl:py-[17.5rem] lg:grid grid-cols-2 grid-rows-1 standard__x_padding">
        <div className="overflow-hidden pb-[2.5rem] lg:pb-0">
            <a.div
              className="justify-self-start pt-[2.5rem] lg:pt-0"
              style={{ y: letterTranslate, filter: regulateBlur }}
            >
              {/* <GradientLetterLeft fromColour={"from-[#5e5e5e]"} toColour={"to-[#7e7e7e]"} LetterText={"A"} /> */}
              <Image
                src={ContactPageImage}
                width={"auto"}
                alt="Contact Page Image"
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden lg:h-[400px] xl:h-[500px] w-full lg:w-auto scale-150"
              />
            </a.div>
          </div>
          {/* <p className="2xl:text-lg">Via:</p> */}
          <div className="justify-self-end lg:mt-0 mt-[2.5rem]">
            <p className=" text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ">Email
              <br />
              <Link href={"mailto:wtjones10@gmail.com"} className="text__c_reduced_black underline">wtjones10@gmail.com</Link>              
            </p>
            
            <p className="pt-[2.5rem] text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">LinkedIn
              <br />
              <Link href={"https://linkedin.com/in/william-thibaut-jones"} className="text__c_reduced_black underline" target="_blank">linkedin.com/in/william-thibaut-jones</Link>              
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
