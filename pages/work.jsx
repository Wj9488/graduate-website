import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import VariableSizeHeading from "@/components/sitewide/VariableSizeHeading";
import ProjectShowcase from "@/components/specific/ProjectShowcase";
import WorkStatus from "@/components/specific/WorkStatus";

import StrongWords from "@/public/images/strong__words_img.png";
import BirdLime from "@/public/images/birdlime__img.png";
import Excode from "@/public/images/blogImages/excode.webp";
import EndCta from "@/components/sitewide/EndCta";
import Footer from "@/components/sitewide/Footer";

const Work = () => {
  return (
    <>
      <PageMetadata PageTitle={"Work"} />
      <main className="overflow-x-hidden">
        {/* <TopGradient gradientFromLeft={"from-[#ff0f7b]"} gradientToRight={"to-[#f89b29]"}/> */}
        <Nav NavPageIdentifierColour={"text__c_reduced_black"} />
        <header className="standard__x_padding_inner p-section-t">
          <WorkStatus />
          <VariableSizeHeading
            fontSize={
              "text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[6rem] pxs-t"
            }
            text={"My projects, professional and extra curricular"}
          />
        </header>
        <section className="pl-t p-section-b standard__x_padding_inner">
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
        <EndCta />
        <Footer />
      </main>
    </>
  );
};

export default Work;


