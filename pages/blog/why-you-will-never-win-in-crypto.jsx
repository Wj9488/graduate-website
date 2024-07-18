
import BlogPageWrapper from "@/components/specific/BlogPageWrapper";
import BlogInfoBar from "@/components/specific/BlogInfoBar";
import PageMetadata from "@/components/sitewide/PageMetadata";
import TopGradient from "@/components/sitewide/TopGradient";
import CommonHeader from "@/components/sitewide/CommonHeader";

const NeverWinInCryptoPost = () => {
  return (
    <>
      <PageMetadata PageTitle={"Why you'll never win in crypto"} />
      <TopGradient gradientFromLeft={`from-[#45caff]`} gradientToRight={`to-[#ff1b6b]`} />
      <BlogPageWrapper>
        <BlogInfoBar postDate={"07/07/2024"} postAuthor={"William Jones"} />
        <div className="pt-[1rem] lg:pt-[2.5rem]">
          <CommonHeader headerText={"Why you'll never win in crypto"} />
        </div>
      </BlogPageWrapper>
    </>
  );
};

export default NeverWinInCryptoPost;
