import BlogPageWrapper from "@/components/specific/BlogPageWrapper";
import PageMetadata from "@/components/sitewide/PageMetadata";

import Link from "next/link";

import Excode2023 from "@/public/images/blogImages/excode.webp";

const Excode2023Post = () => {
  return (
    <>
      <PageMetadata
        PageTitle={
          "Teaching at Excode 2023 | Blog | William Jones"
        }
      />
      <BlogPageWrapper
        author={"William Jones"}
        date={"January 3, 2024"}
        blogLabel={"Perspective"}
        blogTitle={
          "Teaching at Excode 2023."
        }
        desktopImageSrc={Excode2023}
        mobileImageSrc={Excode2023}
        animatedTopText={
          "I really jumped in the deep end with this experience. I'd never taught a className before, let alone taught anyone Python. I'm glad to say that 100% of my class passed the final assessment. Here's what I learned:"
        }
      >
            <h2 className="text-xl underline font-medium mb-4">
                My Experience at Excode
              </h2>

              <p className="mb-4">
                Excode is the UK's largest student volunteer-run Python coding
                bootcamp, organised by the Exeter Entrepreneurs Society. The
                2023 edition of Excode saw over 450 attendees across its 8-week
                programme. The bootcamp covers everything from the basics of
                Python, such as data types, to more advanced concepts like
                functions and file handling.
              </p>

              <p className="mb-4">
                I had the privilege of teaching a className of 26 students during
                this programme. Over the course of the 8 weeks, I guided my
                className from having no prior knowledge of Python to gaining a
                solid grasp of the basics. I'm proud to say that all of my
                students passed the final assessment, achieving a 100% pass
                rate.
              </p>

              <h3 className="text-xl underline font-medium mb-4">
                Teaching Approach and Achievements
              </h3>

              <p className="mb-4">
                Structuring my lessons to best support my students was a key
                focus. The curriculum was carefully designed to gradually build their skills, incorporating hands-on coding challenges and interactive
                sessions. As a workshop leader I had to make sure my className got through and understood all the exercises for that week. Additionally, I provided one-on-one support where
                necessary to ensure no student was left behind. This approach
                not only helped them grasp complex concepts but also encouraged
                them to apply their knowledge practically.
              </p>

              <h4 className="text-xl underline font-medium mb-4">Skills Gained</h4>

              <p className="mb-4">
                My time at Excode was incredibly rewarding and contributed
                significantly to my personal and professional growth. The
                experience equipped me with several key skills:
              </p>

              <ul className="list-disc mb-4 ml-8">
                <li className="mb-2">
                  <span className="italic">
                    Time management and organisational skills
                  </span>
                  : Balancing teaching with my primary degree honed my ability
                  to manage multiple responsibilities efficiently.
                </li>
                <li className="mb-2">
                  <span className="italic">Effective communication</span>:
                  Explaining complex information in an easily digestible manner
                  was crucial, helping me refine my ability to convey ideas
                  clearly and concisely.
                </li>
                <li className="mb-2">
                  <span className="italic">Empathy and adaptability</span>: Quickly
                  understanding and addressing individual students' needs made
                  me more adept at providing tailored support.
                </li>
                <li className="mb-2">
                  <span className="italic">Technical proficiency</span>:
                  Strengthened my understanding of Python and familiarity with
                  tools like Outlook and Google Colab.
                </li>
              </ul>

              <p className="mb-4">
                This experience has not only made me a better educator but also
                a stronger candidate for a graduate role. The skills and
                knowledge I gained at Excode have prepared me to integrate
                effectively into a professional environment and contribute
                meaningfully to any organisation.
              </p>

              <p className="mb-4">
                I believe that initiatives like Excode enhance the university
                experience, offering essential education to students eager to
                develop new skills. This journey has been a testament to the
                power of community-driven learning and personal development.
              </p>
      </BlogPageWrapper>
    </>
  );
};

export default Excode2023Post;
