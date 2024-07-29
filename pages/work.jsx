import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import HeaderLayout from "@/components/sitewide/HeaderLayout";
import ProjectShowcase from "@/components/specific/ProjectShowcase";

import StrongWords from "@/public/images/strong__words_img.png";
import BirdLime from "@/public/images/birdlime__img.png";
import Excode from "@/public/images/excode__img.png";

const Work = () => {
  return (
    <>
      <PageMetadata PageTitle={"Work"} />
      <main className="overflow-x-hidden">
        <TopGradient gradientFromLeft={"from-[#ff0f7b]"} gradientToRight={"to-[#f89b29]"}/>
        <Nav />
        <HeaderLayout
          HeaderMainTitle={
            "Selected Projects - From working in high ticket web design agencies to teaching in a coding bootcamp."
          }
          HeaderMediumText={"2022-2024"}
          HeaderSecondarySmallText={"Projects"}
          HeaderMediumTextGray={"Design, Dev, Work"}
        />
        <section className="py-[6rem] lg:py-[8rem] 2xl:py-[15rem] 3xl:py-[17.5rem]">
          <div className="lg:flex justify-between gap-2">
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
            />
            <div className="pt-[2.5rem] lg:pt-0">
              <ProjectShowcase
                imageSource={Excode}
                projectLinkText={"Exeter Entrepreneurs Society"}
                projectLink={"https://excode.co.uk/"}
                reducedOpacityText={"Teaching"}
                projectTitle={"Excode"}
                extraLargeScreenWidth={"2xl:w-[1000px]"}
                largeScreenWidth={"lg:w-[600px]"}
                liveLink={"/blog/excode-2024"}
                ButtonLiveLinkText={"More Info"}
              />
            </div>
          </div>
          <div className="pt-[2.5rem] lg:ml-0 w-[fit-content]">
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
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Work;


