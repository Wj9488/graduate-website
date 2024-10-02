import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import AnimatedLgText from "@/components/sitewide/AnimatedLgText";
import SkillShowcase from "@/components/specific/SkillShowcase";
import EndCta from "@/components/sitewide/EndCta";
import VariableSizeHeading from "@/components/sitewide/VariableSizeHeading";
import WorkStatus from "@/components/specific/WorkStatus";

import Image from "next/image"

import { motion as a, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

import AboutMainImage from "@/public/images/about__page_main_image.webp";
import AboutPageImage from "@/public/images/landing__img_s.webp"
import Me from "@/public/images/me-about-image.webp"
import ExcodeShowcase from "@/public/images/excode-about-image.webp"
import Footer from "@/components/sitewide/Footer";


const About = () => {
  return (
    <>
      <PageMetadata PageTitle={"About"} />
      <main className="overflow-x-hidden">
        {/* <TopGradient gradientFromLeft={"from-[#ff0f7b]"} gradientToRight={"to-[#f89b29]"}/>  */}
        <Nav NavPageIdentifierColour={"text__c_reduced_black"}/>
        {/* <HeaderLayout
          HeaderMainTitle={
            "Recent business management graduate with a passion for business, marketing and entrepreneurship."
          }
          HeaderSecondarySmallText={"Version - 2024"}
          HeaderMediumText={"Nice to"}
          HeaderMediumTextGray={"Meet you"}
        /> */}
        <header className="p-section-t standard__x_padding">
          <div className="flex items-center justify-center relative overflow-hidden">
            <VariableSizeHeading text={"Exeter Business Graduate"} fontSize={"text-[2.75rem] lg:hidden text-center"}/>
          </div>  
          <VariableSizeHeading fontSize={"text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[6rem] text-center lg:mx-[2.5%] xl:mx-[5%] 2xl:mx-[10%] lg:block hidden"} 
            text={"Combining a passion for business, marketing and technology"}
          />
          <div className="flex items-center justify-center pm-t">
            <WorkStatus />
          </div>
        </header>

        <section className="pl-t">
          <div className="min-w-full overflow-hidden bg-gray-200">
            <Image 
              src={AboutMainImage}
              loading="eager"
              alt="London skyline at night"
              width={3000}
              height={1000}
              className="lg:w-auto lg:h-[100vh] scale-[6] lg:scale-[1.6] lg:block hidden"
            />
          </div>
          <div>
          <Image
                src={AboutPageImage}
                width={"auto"}
                alt="A picture of me graduating."
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden w-full lg:w-auto lg:hidden"
              />
          </div>
        </section>

        <section className="ps-y standard__x_padding_inner accent__c_white">
          <AnimatedLgText
            text={
              "Combining both professional and academic experience, I bring a varied skillset to any job. Empowering me to add value quickly."
            }
            extraCss={
              "lg:w-[50%] xl:w-[32.5%] 2xl:w-[25%]"
            }
          />
          <p className="lg:ml-[50%] lg:w-[40%] 2xl:w-[25%] 2xl:text-lg pm-t ">
          Bilingual in French and English, I bring a diverse skill set and a
            dynamic approach to every endeavour combining my technical skills
            and knowledge gained in my degree.
            <br />
            <br />
            My interest in business began early, starting a small-scale
            landscaping and gardening business at only 15 years old. This
            venture instilled in me a strong work ethic and a knack for business
            operations, allowing me to forgo traditional part-time jobs during
            my studies.
            <br />
            <br />
            With a passion for technology, I interned at two specialised web
            design agencies, where I honed my web development skills. Proficient
            in several coding languages, including Python and JavaScript, and
            frameworks such as Next.js, React, and TypeScript, I realised that
            while I have a strong aptitude for tech, my true calling lies in
            roles that involve more social interaction and collaborationg between team members.
          </p>
        </section>

        <section className="pl-t standard__x_padding_inner">
          <div className="flex items-start justify-between gap-2">
          <Image
                src={AboutPageImage}
                width={"auto"}
                alt="A picture of me graduating."
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden lg:h-[400px] xl:h-[500px] 2xl:h-[600px] w-full lg:w-auto hidden lg:block"
              />
              <Image
                src={Me}
                width={"auto"}
                alt="A picture of me on a grey background."
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden lg:h-[400px] xl:h-[500px] 2xl:h-[600px] w-full lg:w-auto "
              />
              <Image
                src={ExcodeShowcase}
                width={"auto"}
                alt="A picture of me teaching Excode 2023."
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden lg:h-[400px] xl:h-[500px] 2xl:h-[600px] w-full lg:w-auto hidden lg:block"
              />
          </div>
        </section>

        {/* <section className="pt-[2.5rem] lg:pt-[8rem] 2xl:pt-[15rem] 3xl:pt-[17.5rem] lg:grid grid-cols-2 grid-rows-1 standard__x_padding">
          <div className="overflow-hidden">
            <a.div
              className="justify-self-start pt-[2.5rem] lg:pt-0"
              style={{ y: letterTranslate, filter: regulateBlur }}
            >
              <Image
                src={AboutPageImage}
                width={"auto"}
                alt="About Page Image"
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden lg:h-[400px] xl:h-[500px] w-full lg:w-auto scale-125"
              />
            </a.div>
          </div>
          <p className="justify-self-end pt-[2.5rem] lg:pt-0 lg:w-[80%] 2xl:w-[60%] 2xl:text-lg">
          Bilingual in French and English, I bring a diverse skill set and a
            dynamic approach to every endeavour combining my technical skills
            and knowledge gained in my degree.
            <br />
            <br />
            My interest in business began early, starting a small-scale
            landscaping and gardening business at only 15 years old. This
            venture instilled in me a strong work ethic and a knack for business
            operations, allowing me to forgo traditional part-time jobs during
            my studies.
            <br />
            <br />
            With a passion for technology, I interned at two specialised web
            design agencies, where I honed my web development skills. Proficient
            in several coding languages, including Python and JavaScript, and
            frameworks such as Next.js, React, and TypeScript, I realised that
            while I have a strong aptitude for tech, my true calling lies in
            roles that involve more social interaction and collaborationg between team members.
          </p>
        </section> */}
        
        <section className="pl-t standard__x_padding_inner">
          <AnimatedLgText
            text={"My Skills"}
            extraCss={
              "pm-b font-medium"
            }
          />
          <SkillShowcase />
        </section>

        <EndCta />
        <Footer />
      </main>
    </>
  );
};

export default About;
