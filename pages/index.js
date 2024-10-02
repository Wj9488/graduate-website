import CommonHeader from "@/components/sitewide/CommonHeader";
import Nav from "@/components/sitewide/Nav";
import PageMetadata from "@/components/sitewide/PageMetadata";
import AnimatedLgText from "@/components/sitewide/AnimatedLgText";
import BlogTile from "@/components/specific/BlogTile";
import ProjectShowcase from "@/components/specific/ProjectShowcase";

import Image from "next/image";
import Link from "next/link";

import { motion as a, useScroll, useTransform, useInView } from "framer-motion";

import HomePageBackgroundImage from "@/public/images/home__page_background_image.webp";
import FractionalReserveBanking from "@/public/images/blogImages/fraction-reserve-banking.webp";
import CharlieMunger from "@/public/images/blogImages/charlie_munger.webp";
import StrongWords from "@/public/images/strong__words_img.png";
import BirdLime from "@/public/images/birdlime__img.png";
import Excode from "@/public/images/blogImages/excode.webp";
import MobileHomepageImage from "@/public/images/me-about-image.webp";

import EndCta from "@/components/sitewide/EndCta";
import SkillShowcase from "@/components/specific/SkillShowcase";
import Footer from "@/components/sitewide/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const imageTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const sectionTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", "100vh"]
  );

  return (
    <>
      <PageMetadata PageTitle={"Home"} />
      <main className="overflow-x-hidden">
        {/* <TopGradient gradientFromLeft={"from-[#F7F7F7]"} gradientToRight={"to-[#F7F7F7]"}/> */}
        <Nav
          NavPageIdentifierColour={"text-[#fafafa]"}
          NavPageWordColour={"text-[#fafafa]"}
          NavTextColour={"text-[#fafafa]"}
        />

        <a.header
          className="absolute top-0 left-0 min-h-[80vh] lg:min-h-[100dvh] bg-gif min-w-full z-[-10]"
          style={{ y: sectionTranslate }}
        >
          <div className="relative top-0 left-0 min-h-[100dvh] w-full bg-black opacity-20"></div>

          <div className="absolute bottom-[1.25rem] lg:bottom-[2rem] xl:bottom-[2.5rem] 2xl:bottom-[5rem] ml-[1.25rem] lg:ml-[4rem] xl:ml-[8rem] 2xl:ml-[12rem]">
            {/* <p className="text-[#fafafa] pxs-b 2xl:text-lg">
              Exeter University
            </p> */}
            <CommonHeader
              headerText={
                "First Class Business Graduate - Dual English / French national"
              }
              extraCss={"text-[#fafafa] w-[100%] lg:w-[45%] xl:w-[50%] 2xl:w-[40%]"}
            />
          </div>
          {/* 
          <a.div className="" initial={{opacity: 0, y:5, filter: "blur(10px)"}} animate={{opacity: 1, y:0, filter: "blur(0px)"}} transition={{duration: .5}}>
            <a.div className="min-h-[70dvh] flex items-center justify-center" style={{y: imageTranslate}}>
            <Image 
                src={Me}
                loading="eager"
                alt="Me"
                width={"auto"}
                height={300}
                className="rounded-xl lg:h-[250px] w-auto xl:h-[300px] 2xl:h-[500px]"
              />
            </a.div>
          </a.div> */}
        </a.header>
        <section
          id="phantom__section"
          className="h-[95dvh] 2xl:h-[97.5dvh]"
        ></section>

        <section className="ps-t p-section-b standard__x_padding_inner accent__c_white">
          <AnimatedLgText
            text={
              "Exeter University graduate wishing to bring a passion for business, marketing and technology to the workplace."
            }
            extraCss={
              "lg:w-[50%] 2xl:w-[25%] "
            }
          />
        </section>

        <section className="standard__x_padding_inner accent__c_white">
          <div className="lg:flex items-center justify-between">
            <AnimatedLgText
              text={"Recent Blog Posts"}
              extraCss={
                "font-medium pxs-b"
              }
            />
            <Link href={"/blog"}>
              <p className="hover:opacity-50 duration-200 transition-all lg:pt-0 py-[1.25rem]">
                View All
              </p>
            </Link>
          </div>
          <div className="lg:grid grid-rows-1 grid-cols-2 gap-[1.25rem]">
            <BlogTile
              src={FractionalReserveBanking}
              href={"/blog/a-simple-explanation-of-fractional-reserve-banking-and-its-impacts"}
              alt={"A picture of the bank of England."}
              blogTitle={"A simple explanation of fractional reserve banking and its impacts."}
              blogDate={"September 12, 2024"}
              blogType={"Learning"}
            />
            <BlogTile
              src={CharlieMunger}
              href={"/blog/lessons-from-charlie-munger-a-summary-of-talk-11-the-psychology-of-human-misjudgement"}
              alt={"Blog 1"}
              blogTitle={
                "Lessons from Charlie Munger - A Summary of Talk 11, 'The Psychology of Human Misjudgement'"
              }
              blogDate={"September 1, 2024"}
              blogType={"Learning"}
            />
            {/* <BlogTile
              src={HomePageBackgroundImage}
              href={"/post/"}
              alt={"Blog 1"}
              blogTitle={"With great branding comes great power."}
              blogDate={"September 1, 2024"}
            /> */}
          </div>
        </section>

        <section className="pl-t">
          <div className="min-w-full overflow-hidden bg-gray-200">
            <Image 
              src={HomePageBackgroundImage}
              loading="eager"
              alt="London skyline at night"
              width={3000}
              height={1000}
              className="lg:w-auto lg:h-[100vh] scale-[6] lg:scale-[1.6] lg:block hidden"
            />
          </div>
          <div>
          <Image
                src={MobileHomepageImage}
                width={"auto"}
                alt="A picture of me on a grey background."
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden w-full lg:w-auto lg:hidden"
              />
          </div>
        </section>

        <section className="pl-t standard__x_padding_inner" id="work">
          <AnimatedLgText
            text={"My Projects"}
            extraCss={
              "pm-b font-medium"
            }
          />
          <div className="">
            <div className="w-[fit-content]">
              <ProjectShowcase
                imageSource={StrongWords}
                projectLinkText={"Array"}
                projectLink={"https://array.design"}
                reducedOpacityText={"Design & Development"}
                projectTitle={"Strong Words"}
                extraLargeScreenWidth={"2xl:w-[1300px]"}
                largeScreenWidth={"lg:w-[900px]"}
                liveLink={"https://strong-words.co.uk"}
                ButtonLiveLinkText={"View Live"}
                target={"_blank"}
              />
            </div>
            <div className="lg:ml-[45%] xl:ml-[50%] 2xl:ml-[60%] pm-y w-[fit-content]">
              <ProjectShowcase
                imageSource={Excode}
                projectLinkText={"Exeter Entrepreneurs Society"}
                projectLink={"https://excode.co.uk/"}
                reducedOpacityText={"Teaching"}
                projectTitle={"Excode"}
                extraLargeScreenWidth={"2xl:w-[1000px]"}
                largeScreenWidth={"lg:w-[600px]"}
                liveLink={"/blog/excode-2023"}
                ButtonLiveLinkText={"More Info"}
                target={"_self"}
              />
            </div>
          </div>
          <div className="w-[fit-content]">
            <ProjectShowcase
              imageSource={BirdLime}
              projectLinkText={"Thousand Lines"}
              projectLink={"https://thousand-lines.com"}
              reducedOpacityText={"Development"}
              projectTitle={"Birdlime Media"}
              extraLargeScreenWidth={"2xl:w-[1300px]"}
              largeScreenWidth={"lg:w-[900px]"}
              liveLink={"https://birdlimemedia.co.uk"}
              ButtonLiveLinkText={"View Live"}
              target={"_blank"}
            />
          </div>
        </section>

        <section className="p-section-t standard__x_padding_inner">
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

        {/* <section className="py-[5rem] 2xl:py-[7.5rem] 3xl:py-[10rem]">
          <div className="flex items-start justify-between gap-[2.5rem] standard__x_padding">
            <p className="text-4xl 2xl:text-5xl text__c_reduced_black">About Me</p>
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
            <p className="2xl:text-lg">1</p>
          </div>
        </section>

        <section className="py-[5rem] 2xl:py-[7.5rem] 3xl:py-[10rem] standard__x_padding bg-[#edede9]">
          <div className="flex items-center justify-between">
            <CommonHeader
              extraCss={""}
              headerText={"Education"}
            />  
          </div>
          <div className="pt-[2.5rem] 2xl:pt-[2.5rem]">
            <div className="flex items-start justify-between">
              <p className="text-4xl 2xl:text-5xl ">
                Exeter University <br />
                <span className="text__c_reduced_black">
                  Business Management BSc
                </span>
              </p>
              <p className="text-4xl 2xl:text-5xl">
                First Class
              </p>
            </div>
            <p className="2xl:text-lg pt-[1.5rem] 2xl:pt-[2.5rem]">
              Highly analytical and critical degree covering all areas of modern
              business. Achieved grades in the 90th percentile of my year group
              in year 2.
              <br/>
              Managing Entrepreneurially [81%], Strategic Digital Marketing
              [81%], Managerial Accounting [90%], Thinking Entrepreneurially
              [78%], Managing Change and Crisis in Organisations [76%], Consumer
              Behaviour [76%].
            </p>
          </div>
          <div className="pt-[5rem] 2xl:pt-[5.5rem]">
            <div className="flex items-start justify-between">
              <p className="text-4xl 2xl:text-5xl ">
                Beacon Academy <br />
                <span className="text__c_reduced_black">
                  Sixth Form
                </span>
              </p>
              <p className=" text-4xl 2xl:text-5xl">
                A*, A, B
              </p>
            </div>
            <p className="2xl:text-lg pt-[1.5rem] 2xl:pt-[2.5rem]">
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
