import Footer from "../sitewide/Footer"
import Nav from "../sitewide/Nav"
import VariableSizeHeading from "../sitewide/VariableSizeHeading"
import BlogInfoBar from "./BlogInfoBar"
import AnimatedLgText from "../sitewide/AnimatedLgText"

import Image from "next/image"
import BlogHeading from "./BlogHeading"

const BlogPageWrapper = ({children, author, date, blogTitle, desktopImageSrc, mobileImageSrc, animatedTopText, blogLabel}) => {
  return (
    <main>
        <Nav NavPageIdentifierColour={"text__c_reduced_black"}/>
        <header className="p-section-t ps-b standard__x_padding_inner">
          <BlogInfoBar postAuthor={author} blogLabel={blogLabel} postDate={date}/>
          <BlogHeading extraCss={"lg:w-[55%] xl:w-[45%]"} headerText={blogTitle}/>
        </header>
        <section className="pm-t">
          <div className="min-w-full overflow-hidden bg-gray-200">
            <Image 
              src={desktopImageSrc}
              loading="eager"
              alt="London skyline at night"
              width={3000}
              height={1000}
              className="lg:w-auto lg:h-auto scale-[6] lg:scale-[1.2] lg:block hidden"
            />
          </div>
          <div>
          <Image
                src={mobileImageSrc}
                width={"auto"}
                alt="A picture of me on a grey background."
                height={1000}
                loading="eager"
                quality={100}
                className="overflow-hidden w-full lg:w-auto lg:hidden"
              />
          </div>
        </section>
        <section className="pm-b standard__x_padding_inner">
          <AnimatedLgText
            text={
              animatedTopText
            }
            extraCss={
              "lg:w-[50%] xl:w-[35%] 2xl:w-[35%] pm-t"
            }
            />
            <div className="lg:ml-[40%] lg:w-[50%] 2xl:w-[30%] 2xl:text-lg pm-t p-section-b">
              {children}
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default BlogPageWrapper