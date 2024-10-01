import { motion as a, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";


const SkillShowcase = () => {
    
    const { scrollYProgress } = useScroll();

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
            "OneNote",
            "Google Forms",
            "Google Sheets",
            "Google Docs",
          ],
        },
        {
          title: "Personal Skills",
          items: [
            "Self Teaching",
            "Team Collaboration",
            "Fast Learner",
            "Problem Solver",
            "Multitasking",
            "Detail Oriented",
          ],
        },
        {
          title: "Marketing Tools",
          items: [
            "Google Analytics",
            "Meta Ads Manager",
            "SparkToro",
            "Similar Web",
            "Mailchimp",
          ],
        },
      ];

      const skillAnimation = {
        hidden: { y: 10, opacity: 0, filter: "blur(10px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
      };
  return (
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
                  } ${index >= 2 ? "mt-[1.25rem] lg:mt-0" : ""}`}
                >
                  <div className="px-[1.25rem]">
                    <p className="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text__c_reduced_black">
                      {skill.title}
                    </p>
                    <div className="pt-[2.5rem] 2xl:text-lg">
                      {skill.items.map((item, itemIndex) => (
                        <a.div
                          key={itemIndex}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          variants={skillAnimation}
                          transition={{
                            delay: 0.25 + itemIndex * 0.1,
                            duration: 0.25,
                          }}
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
  )
}

export default SkillShowcase