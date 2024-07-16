import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import HeaderLayout from "@/components/sitewide/HeaderLayout";
import GradientLetterLeft from "@/components/specific/GradientLetterLeft";

import { motion as a, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

import Link from "next/link"

const Contact = () => {
  const { scrollYProgress } = useScroll();

  const letterTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const regulateBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(10px)", "blur(40px)"]
  );
  return (
    <>
      <PageMetadata PageTitle={"Contact"} />
      <main className="overflow-x-hidden">
        <TopGradient gradientFromLeft={"from-[#FF0F7B]"} gradientToRight={"to-[#F89B29]"}/>
        <Nav />
        <HeaderLayout 
          HeaderMainTitle={"If you want to work together or just want to say hi, feel free to drop me a line."}
          HeaderMediumText={"Let's get in touch"}
          HeaderSecondarySmallText={"London, UK"}
          HeaderMediumTextGray={"19:00"}
        />
        <section className="pt-[2.5rem] pb-[6rem] lg:py-[8rem] 2xl:py-[15rem] 3xl:py-[17.5rem] lg:grid grid-cols-2 grid-rows-1 standard__x_padding">
          <a.div
            style={{ y: letterTranslate, filter: regulateBlur }}
          >
            <GradientLetterLeft LetterText={"C"} />
          </a.div>
          {/* <p className="2xl:text-lg">Via:</p> */}
          <div className="justify-self-end">
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
