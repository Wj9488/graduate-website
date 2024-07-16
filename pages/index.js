import CommonHeader from "@/components/sitewide/CommonHeader";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import PageMetadata from "@/components/sitewide/PageMetadata";
import Canvas from "@/components/specific/Canvas";

import Image from "next/image";

import { motion as a } from "framer-motion";

import HomePageImage from "@/public/images/h.png";

export default function Home() {
  const textAnimation = {
    hidden: { y: 2.5, opacity: 0, filter: "blur(15px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  return (
    <>
      <PageMetadata PageTitle={"Home"} />
      <main className="overflow-x-hidden">
        <TopGradient gradientFromLeft={"from-[#FF0F7B]"} gradientToRight={"to-[#F89B29]"}/>
        <Nav />
        <Canvas />
        <a.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.25 }}
          variants={textAnimation}
        >
          <Image
            src={HomePageImage}
            width={500}
            height={"auto"}
            placeholder="blur"
            className="lg:hidden standard__x_padding w-[full] h-[auto]"
          />
        </a.div>
        <div className="absolute bottom-8 z-[1] accent__c_white">
          <header className="pt-[2.5rem] lg:pt-[8rem] 2xl:pt-[15rem] 3xl:pt-[17.5rem]">
            <div className="header__grid standard__x_padding">
              <div id="HeaderText" className="justify-self-start">
                <CommonHeader
                  headerText={
                    "Hi, I'm Will, a first class business management graduate."
                  }
                />
              </div>
              <a.div
                id="SmallText"
                className="justify-self-center pt-[2.5rem] lg:pt-0"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.25 }}
                variants={textAnimation}
              >
                <p>Welcome</p>
              </a.div>
              <a.div
                id="MediumText"
                className="justify-self-end pt-[2.5rem] lg:pt-0"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 0.25 }}
                variants={textAnimation}
              >
                <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  Currently searching for a role in a London based company.
                </p>
              </a.div>
            </div>
          </header>
        </div>
        {/* 
        <section className="py-[10rem] 2xl:py-[15rem] 3xl:py-[17.5rem]">
          <div className="flex items-start justify-between gap-[2.5rem] standard__x_padding">
            <p className="text-4xl 2xl:text-5xl text__c_reduced_black">Intro</p>
            <p className="text-4xl 2xl:text-5xl w-[60%]">
              As a dual English & French passport holder and native speaker of
              both languages, I bring strong linguistic skills to any role. My
              First-Class Honours in Business Management from Exeter University
              has equipped me with analytical and critical thinking skills
              across various business disciplines.
              <br />
              <br />
              Additionally, my diverse work experience, from leading Python
              workshops to developing websites for clients, showcases my ability
              to manage projects independently under tight deadlines and with a
              strong focus on client satisfaction. I am proficient with modern
              AI tools, a skill that I can utilise to contribute effectively
              within any role. 
            </p>
            <p className="2xl:text-lg">S - 01</p>
          </div>
        </section>

        <section className="py-[10rem] 2xl:py-[15rem] 3xl:py-[17.5rem] accent__c_black standard__x_padding">
          <div className="flex items-center justify-between">
            <CommonHeader
              extraCss={"text__c_contrast"}
              headerText={"EDUCATION"}
            />
            <p className="text__c_contrast_reduced_opacity 3xl:text-lg">
              S - 02
            </p>
          </div>
          <div className="pt-[2.5rem] 2xl:pt-[3rem]">
            <div className="flex items-start justify-between">
              <p className="text__c_contrast text-4xl 2xl:text-5xl ">
                Exeter University <br />
                <span className="text__c_contrast_reduced_opacity">
                  Business Management BSc
                </span>
              </p>
              <p className="text__c_contrast text-4xl 2xl:text-5xl">
                First Class
              </p>
            </div>
            <p className="2xl:text-lg text__c_contrast pt-[1.5rem] 2xl:pt-[2rem]">
              Highly analytical and critical degree covering all areas of modern
              business. Achieved grades in the 90th percentile of my year group
              in year 2.
              <br />
              <br />
              Managing Entrepreneurially [81%], Strategic Digital Marketing
              [81%], Managerial Accounting [90%], Thinking Entrepreneurially
              [78%], Managing Change and Crisis in Organisations [76%], Consumer
              Behaviour [76%]
            </p>
          </div>
          <div className="pt-[5rem] 2xl:pt-[5.5rem]">
            <div className="flex items-start justify-between">
              <p className="text__c_contrast text-4xl 2xl:text-5xl ">
                Beacon Academy <br />
                <span className="text__c_contrast_reduced_opacity">
                  Sixth Form
                </span>
              </p>
              <p className="text__c_contrast text-4xl 2xl:text-5xl">
                A*, A, B
              </p>
            </div>
            <p className="2xl:text-lg text__c_contrast pt-[1.5rem] 2xl:pt-[2rem]">
              French [A*], History [A], Psychology [B]
            </p>
          </div>
        </section> */}

        {/* <section className="py-[10rem] 2xl:py-[15rem] 3xl:py-[17.5rem] standard__x_padding">
          <CommonHeader headerText={"WORK EXPERIENCE"}/> 
        </section> */}
      </main>
    </>
  );
}
