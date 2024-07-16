
import BlogPageWrapper from "@/components/specific/BlogPageWrapper";
import BlogInfoBar from "@/components/specific/BlogInfoBar";
import PageMetadata from "@/components/sitewide/PageMetadata";
import TopGradient from "@/components/sitewide/TopGradient";

const WhatIsYourNumberPost = () => {
  return (
    <>
      <PageMetadata PageTitle={"What is your number?"} />
      <TopGradient gradientFromLeft={`from-[#ff930f]`} gradientToRight={`to-[#fff95b]`} />
      <BlogPageWrapper>
        <BlogInfoBar postDate={"07/07/2024"} postAuthor={"William Jones"} />
      </BlogPageWrapper>
    </>
  );
};

export default WhatIsYourNumberPost;
