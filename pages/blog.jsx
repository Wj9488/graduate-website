import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import VariableSizeHeading from "@/components/sitewide/VariableSizeHeading";
import BlogTile from "@/components/specific/BlogTile";
import EndCta from "@/components/sitewide/EndCta";
import Footer from "@/components/sitewide/Footer";

import SampleImage from "@/public/images/about__page_main_image.webp";
import ExcodeImage from "@/public/images/blogImages/excode.webp";
import CharlieMunger from "@/public/images/blogImages/charlie_munger.webp";
import GDPR from "@/public/images/blogImages/gdpr.png";
import FractionalReserve from "@/public/images/blogImages/fraction-reserve-banking.webp";

const Blog = () => {
  const Learning = "Learning";
  const Perspective = "Perspective";

  return (
    <>
      <PageMetadata PageTitle={"Blog"} />
      <main className="overflow-x-hidden">
        <Nav NavPageIdentifierColour={"text__c_reduced_black"} />
        <header className="standard__x_padding_inner p-section-t">
          <VariableSizeHeading
            fontSize={
              "text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[6rem] pxs-t"
            }
            text={"All Posts"}
          />
        </header>
        <section className="pm-y standard__x_padding_inner">
          <div className="flex items-center gap-4">
            <p className="text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]">
              Perspectives
              <span className="text__c_reduced_black">{" (1)"}</span>
            </p>
            <p className="text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]">
              Learnings<span className="text__c_reduced_black">{" (2)"}</span>
            </p>
          </div>
        </section>
        <section className="standard__x_padding_inner">
          <div className="lg:grid grid-rows-1 grid-cols-3 gap-[1.25rem]">
            <BlogTile
              blogTitle={"A simple explanation of fractional reserve banking and its impacts."}
              blogDate={"September 12, 2024"}
              href={"/blog/a-simple-explanation-of-fractional-reserve-banking-and-its-impacts"}
              alt={"An image of the bank of England"}
              src={FractionalReserve}
              blogType={Learning}
            />
            <BlogTile
              blogTitle={
                "Lessons from Charlie Munger, a summary of talk 11 'The Psychology of Human Misjudgement'."
              }
              blogDate={"June 21, 2024"}
              href={"/blog/lessons-from-charlie-munger-a-summary-of-talk-11-the-psychology-of-human-misjudgement"}
              alt={"An image of Charlie Munger"}
              src={CharlieMunger}
              blogType={Learning}
            />
            <BlogTile
              blogTitle={"Teaching at Excode 2023."}
              blogDate={"January 3, 2024"}
              href={"/blog/excode-2023"}
              alt={"An image of Excode 2023"}
              src={ExcodeImage}
              blogType={Perspective}
            />
            {/* <BlogTile
              blogTitle={"With a great brand comes great power."}
              blogDate={"June 21, 2024"}
              href={"/blog/with-great-branding-comes-great-power"}
              alt={"A large image"}
              src={SampleImage}
              blogType={Perspective}
            /> */}
            {/* <BlogTile 
              blogTitle={"Teaching at Excode 2023"}
              blogDate={"January 3, 2024"}
              href={"/blog/teaching-at-excode-2023"}
              alt={"Me teaching my ExCode group"}
              src={ExcodeImage}
              blogType={Learning}
            /> */}
          </div>
        </section>

        <EndCta />
        <Footer />
      </main>
    </>
  );
};

export default Blog;
