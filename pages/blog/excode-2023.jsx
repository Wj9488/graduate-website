import BlogPageWrapper from "@/components/specific/BlogPageWrapper";
import BlogInfoBar from "@/components/specific/BlogInfoBar";
import PageMetadata from "@/components/sitewide/PageMetadata";
import TopGradient from "@/components/sitewide/TopGradient";
import CommonHeader from "@/components/sitewide/CommonHeader";

import { motion as a } from "framer-motion";

import Image from "next/image";

import ExcodeBlogImage from "../../public/images/e.png";

const Excode2024 = () => {
  const textAnimation = {
    hidden: { opacity: 0, filter: "blur(15px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };
  return (
    <>
      <PageMetadata PageTitle={"Excode 2023"} />
      <TopGradient
        gradientFromLeft={`from-[#6eee87]`}
        gradientToRight={`to-[#5fc52e]`}
      />
      <BlogPageWrapper>
        <BlogInfoBar
          postDate={"19th January 2024"}
          postAuthor={"William Jones"}
        />
        <div className="pt-[1rem] lg:pt-[2.5rem]">
          <CommonHeader headerText={"Teaching at ExCode 2023"} />
          <Image
            src={ExcodeBlogImage}
            width={2000}
            height={"auto"}
            className="w-full pt-[1rem] lg:pt-[2.5rem]"
            placeholder="blur"
            loading="eager"
            quality={100}
          />
          <section className="pt-[1rem] lg:pt-[2.5rem]">
            <a.div
              className="2xl:text-lg"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25, duration: 0.15 }}
              variants={textAnimation}
            >
              <h2 class="text-xl underline font-medium mb-4">
                My Experience at Excode
              </h2>

              <p class="mb-4">
                Excode is the UK's largest student volunteer-run Python coding
                bootcamp, organised by the Exeter Entrepreneurs Society. The
                2023 edition of Excode saw over 450 attendees across its 8-week
                programme. The bootcamp covers everything from the basics of
                Python, such as data types, to more advanced concepts like
                functions and file handling.
              </p>

              <p class="mb-4">
                I had the privilege of teaching a class of 26 students during
                this programme. Over the course of the 8 weeks, I guided my
                class from having no prior knowledge of Python to gaining a
                solid grasp of the basics. I'm proud to say that all of my
                students passed the final assessment, achieving a 100% pass
                rate.
              </p>

              <h3 class="text-xl underline font-medium mb-4">
                Teaching Approach and Achievements
              </h3>

              <p class="mb-4">
                Structuring my lessons to best support my students was a key
                focus. The curriculum was carefully designed to gradually build their skills, incorporating hands-on coding challenges and interactive
                sessions. As a workshop leader I had to make sure my class got through and understood all the exercises for that week. Additionally, I provided one-on-one support where
                necessary to ensure no student was left behind. This approach
                not only helped them grasp complex concepts but also encouraged
                them to apply their knowledge practically.
              </p>

              <h4 class="text-xl underline font-medium mb-4">Skills Gained</h4>

              <p class="mb-4">
                My time at Excode was incredibly rewarding and contributed
                significantly to my personal and professional growth. The
                experience equipped me with several key skills:
              </p>

              <ul class="list-disc list-inside mb-4">
                <li class="mb-2">
                  <span class="italic">
                    Time management and organisational skills
                  </span>
                  : Balancing teaching with my primary degree honed my ability
                  to manage multiple responsibilities efficiently.
                </li>
                <li class="mb-2">
                  <span class="italic">Effective communication</span>:
                  Explaining complex information in an easily digestible manner
                  was crucial, helping me refine my ability to convey ideas
                  clearly and concisely.
                </li>
                <li class="mb-2">
                  <span class="italic">Empathy and adaptability</span>: Quickly
                  understanding and addressing individual students' needs made
                  me more adept at providing tailored support.
                </li>
                <li class="mb-2">
                  <span class="italic">Technical proficiency</span>:
                  Strengthened my understanding of Python and familiarity with
                  tools like Outlook and Google Colab.
                </li>
              </ul>

              <p class="mb-4">
                This experience has not only made me a better educator but also
                a stronger candidate for a graduate role. The skills and
                knowledge I gained at Excode have prepared me to integrate
                effectively into a professional environment and contribute
                meaningfully to any organisation.
              </p>

              <p class="mb-4">
                I believe that initiatives like Excode enhance the university
                experience, offering essential education to students eager to
                develop new skills. This journey has been a testament to the
                power of community-driven learning and personal development.
              </p>
            </a.div>
          </section>
        </div>
      </BlogPageWrapper>
    </>
  );
};

export default Excode2024;
