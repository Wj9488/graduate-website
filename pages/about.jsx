import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import HeaderLayout from "@/components/sitewide/HeaderLayout";
import GradientLetterLeft from "@/components/specific/GradientLetterLeft";

import { motion as a, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { scrollYProgress } = useScroll();

  const letterTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const regulateBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(10px)", "blur(40px)"]
  );

  const skills = [
    {
      title: "Coding Languages",
      items: ["HTML", "CSS", "Python", "JavaScript"],
    },
    {
      title: "Office and Google",
      items: [
        "Excel",
        "Word",
        "Teams",
        "Outlook",
        "Google Forms",
        "Google Sheets",
        "Google Docs",
      ],
    },
    {
      title: "AI Tools",
      items: ["Claude", "OpenAi GPTs", "MidJourney", "Google Gemini"],
    },
    {
      title: "Web Frameworks",
      items: ["Next.js", "React", "SCSS", "Tailwind CSS"],
    },
  ];

  const skillAnimation = {
    hidden: { y: 10, opacity: 0, filter: "blur(15px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)"},
  };


  return (
    <>
      <PageMetadata PageTitle={"About"} />
      <main className="overflow-x-hidden">
        <TopGradient gradientFromLeft={"from-[#ff0f7b]"} gradientToRight={"to-[#f89b29]"}/>
        <Nav />
        <HeaderLayout
          HeaderMainTitle={
            "Hi, I’m Will, a recent business graduate with a passion for business and entrepreneurship."
          }
          HeaderSecondarySmallText={"2024"}
          HeaderMediumText={"Hello, Bonjour"}
          HeaderMediumTextGray={"Welcome"}
        />
        <section className="pt-[2.5rem] lg:pt-[8rem] 2xl:pt-[15rem] 3xl:pt-[17.5rem] lg:grid grid-cols-2 grid-rows-1 standard__x_padding">
          <a.div
            className="justify-self-start pt-[2.5rem] lg:pt-0"
            style={{ y: letterTranslate, filter: regulateBlur }}
          >
            <GradientLetterLeft fromColour={"from-[#ff0f7b]"} toColour={"to-[#f89b29]"} LetterText={"A"} />
          </a.div>
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
            roles that involve more social interaction.
            <br />
            <br />
            Therefore, I’m looking for a front-facing business related role in a
            small to medium sized business based in London.{" "}
          </p>
        </section>
        <section className="pt-[2.5rem] pb-[6rem] lg:py-[8rem] 2xl:py-[15rem] 3xl:py-[17.5rem] standard__x_padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1">
            {skills.map((skill, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`border__left ${
                    index % 2 !== 0 ? "border__right lg:border-r-0" : ""
                  } ${index >= 2 ? "mt-[2.5rem] lg:mt-0" : ""}`}
                >
                  <div className="px-[1rem] lg:px-[2.5rem]">
                    <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text__c_black">
                      {skill.title}
                    </p>
                    <div className="pt-[2.5rem] 2xl:text-lg">
                      {skill.items.map((item, itemIndex) => (
                        <a.div
                          key={itemIndex}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          variants={skillAnimation}
                          transition={{ delay: 0.25 + itemIndex * 0.1, duration: 0.25 }}
                        >
                          {item}
                          <br />
                        </a.div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
