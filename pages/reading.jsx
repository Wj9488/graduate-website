import PageMetadata from "@/components/sitewide/PageMetadata";
import HeaderLayout from "@/components/sitewide/HeaderLayout";
import Nav from "@/components/sitewide/Nav";
import TopGradient from "@/components/sitewide/TopGradient";
import BookShowcase from "@/components/specific/BookShowcase";

import PoorCharlie from "@/public/images/poor_charles.png";
import NeverEnough from "@/public/images/never_enough.png";
import NineteenEightyFour from "@/public/images/1984.png";
import ThirdDoor from "@/public/images/third_door.png";
import BraveNewWorld from "@/public/images/brave_new_world.png";
import CommonSenseInvesting from "@/public/images/common_sense_investing.png";
import Mfm from "@/public/images/mfm.png"
import Founders from "@/public/images/founders.png"

import { motion as a, useScroll, useTransform, useInView } from "framer-motion";

const Modules = () => {
  const { scrollYProgress } = useScroll();

  const letterTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const regulateBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(10px)", "blur(40px)"]
  );
  return (
    <>
      <PageMetadata PageTitle={"Books I've read"} />
      <main className="overflow-x-hidden">
        {/* <TopGradient
          gradientFromLeft={"from-[#ff0f7b]"}
          gradientToRight={"to-[#f89b29]"}
        /> */}
        <Nav NavPageIdentifierColour={"text__c_reduced_black"} />
        <HeaderLayout
          HeaderMainTitle={
            "Whether driving or working, I'll always tend to listen to a book or podcast."
          }
          HeaderMediumText={"Books & Podcasts"}
          HeaderSecondarySmallText={"Some of the best books & podcasts I've listened to  this year."} 
          HeaderMediumTextGray={"x8 "}
        />
        <section className="py-[6rem] lg:py-[8rem] 2xl:py-[15rem] 3xl:py-[17.5rem] standard__x_padding lg:flex gap-[10rem]">
          <div className="lg:hidden">
            <a.div style={{ y: letterTranslate, filter: regulateBlur }}>
              {/* <GradientLetterLeft fromColour={"from-[#ff0f7b]"} toColour={"to-[#f89b29]"} LetterText={"B"} /> */}
            </a.div>
          </div>
          <div className="pt-[2.5rem] lg:pt-0 w-full accent__c_white">
            <div className="bt">
              <BookShowcase
                bookTitle={"Poor Charlie's Almanack"}
                bookTopic={"Investing"}
                bookAuthor={"Charlie Munger"}
                imageSrc={PoorCharlie}
                // bookLink={"/readings/poor-charlie-almanack"}
              />
            </div>
            <div className="bt">
              <BookShowcase
                bookTitle={"Never Enough"}
                bookTopic={"Business"}
                bookAuthor={"Andrew Wilkinson"}
                imageSrc={NeverEnough}
                // bookLink={"/readings/never-enough"}
              />
            </div>
            <div className="bt">
              <BookShowcase
                bookTitle={"1984"}
                bookTopic={"Fiction"}
                bookAuthor={"George Orwell"}
                imageSrc={NineteenEightyFour}
                // bookLink={"/readings/1984"}
              />
            </div>
            <div className="bt">
              <BookShowcase
                bookTitle={"The Third Door"}
                bookTopic={"Business"}
                bookAuthor={"Alex Banayan"}
                imageSrc={ThirdDoor}
                // bookLink={"/readings/the-third-door"}
              />
            </div>
            <div className="bt">
              <BookShowcase
                bookTitle={"A Brave New World"}
                bookTopic={"Fiction"}
                bookAuthor={"Aldous Huxley"}
                imageSrc={BraveNewWorld}
                // bookLink={"/readings/brave-new-world"}
              />
            </div>
            <div className="bt">
              <BookShowcase
                bookTitle={"Common Sense Investing"}
                bookTopic={"Investing"}
                bookAuthor={"John C. Bogle"}
                imageSrc={CommonSenseInvesting}
                // bookLink={"/readings/brave-new-world"}
              />
            </div>
            <div className="bt">
              <BookShowcase
                bookTitle={"My First Million"}
                bookTopic={"Podcast"}
                bookAuthor={"Business"}
                imageSrc={Mfm}
                // bookLink={"/readings/brave-new-world"}
              />
            </div>
            <div className="bt bb">
              <BookShowcase
                bookTitle={"Founders"}
                bookTopic={"Podcast"}
                bookAuthor={"Business"}
                imageSrc={Founders}
                // bookLink={"/readings/brave-new-world"}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Modules;
