import { useState } from "react";
import { motion as a, AnimatePresence } from "framer-motion";
import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import BlogListItem from "@/components/specific/BlogListItem";

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const defaultStyles = {
    color: "#15151530",
  };

  const hoveredStyles = hoveredPost
    ? {
        backgroundImage: `linear-gradient(-45deg, ${hoveredPost.gradientFrom}, ${hoveredPost.gradientTo})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : defaultStyles;

  const blogPosts = [
    {
      postNumber: "01",
      postTitle: "What is your number?",
      postHref: "what-is-your-number",
      gradientFrom: "#ff930f",
      gradientTo: "#fff95b",
    },
    {
      postNumber: "02",
      postTitle: "Why you'll never win in crypto",
      postHref: "why-you-will-never-win-in-crypto",
      gradientFrom: "#45caff",
      gradientTo: "#ff1b6b",
    },
    {
      postNumber: "03",
      postTitle: "The most underrated business asset",
      postHref: "the-most-underrated-business-asset",
      gradientFrom: "#57ebde",
      gradientTo: "#aefb2a",
    },
  ];

  const textAnimation = {
    hidden: { y: 10, opacity: 0, filter: "blur(15px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <>
      <PageMetadata PageTitle={"Blog"} />
      <main className="overflow-x-hidden">
        <TopGradient
          gradientFromLeft={'from-[#FF0F7B]'}
          gradientToRight={'to-[#F89B29]'}
        />
        <Nav />
        <section className="pt-[6rem] lg:pt-[8rem] 2xl:pt-[15rem] 3xl:pt-[17.5rem] standard__x_padding">
          <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl  text__c_reduced_black">Posts</p>
          <ul className="">
            {blogPosts.map((post, index) => (
              <a.div
                key={post.postNumber}
                initial="hidden"
                animate="visible"
                variants={textAnimation}
                transition={{ duration: 0.25, delay: 0.25 + index * 0.05 }}
              >
                <BlogListItem
                  postNumber={post.postNumber}
                  postTitle={post.postTitle}
                  postHref={post.postHref}
                  gradientFrom={post.gradientFrom}
                  gradientTo={post.gradientTo}
                  setHoveredPost={setHoveredPost}
                />
              </a.div>
            ))}
          </ul>
        </section>
        <AnimatePresence>
          {hoveredPost ? (
            <a.p
              key={hoveredPost.postNumber}
              className="fixed bottom-2 right-[0.5rem] lg:right-[0.75rem] blur-lg text-[10rem] lg:text-[15rem] xl:text-[20rem] 2xl:text-[25rem] 3xl:text-[30rem] leading-[.8] overflow-y-hidden"
              style={hoveredStyles}
              initial={{ opacity: 0, filter: "blur(50px)" }}
              animate={{ opacity: 1, filter: "blur(15px)" }}
              exit={{ opacity: 0, filter: "blur(50px)" }}
              transition={{ duration: 0.5 }}
            >
              {hoveredPost.postNumber}
            </a.p>
          ) : (
            <a.p
              key="00"
              className="fixed bottom-2 right-[0.5rem] lg:right-[0.75rem] blur-lg text-[10rem] lg:text-[15rem] xl:text-[20rem] 2xl:text-[25rem] 3xl:text-[30rem] leading-[.8] overflow-y-hidden"
              style={defaultStyles}
              initial={{ opacity: 0, filter: "blur(50px)" }}
              animate={{ opacity: 1, filter: "blur(15px)" }}
              exit={{ opacity: 0, filter: "blur(50px)" }}
              transition={{ duration: 0.5 }}
            >
              00
            </a.p>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Blog;
