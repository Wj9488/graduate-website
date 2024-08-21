import { useState } from "react";
import { motion as a, AnimatePresence } from "framer-motion";
import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import BlogListItem from "@/components/specific/BlogListItem";

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const defaultStyles = {
    color: "#fefefe",
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
      postTitle: "Teaching at Excode 2023",
      postHref: "excode-2023",
      gradientFrom: "#ff0f7b",
      gradientTo: "#f89b29",
    },
    {
      postNumber: "02",
      postTitle: "A psychological bias checklist",
      postHref: "a-psychological-bias-checklist",
      gradientFrom: "#ff5858",
      gradientTo: "#ffc8c8",
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
        {/* <TopGradient
          gradientFromLeft={'from-[#070707]'}
          gradientToRight={'to-[#b1b1b1]'}
        /> */}
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
