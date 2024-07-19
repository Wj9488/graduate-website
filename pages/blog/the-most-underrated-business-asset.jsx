import BlogPageWrapper from "@/components/specific/BlogPageWrapper";
import BlogInfoBar from "@/components/specific/BlogInfoBar";
import PageMetadata from "@/components/sitewide/PageMetadata";
import TopGradient from "@/components/sitewide/TopGradient";
import CommonHeader from "@/components/sitewide/CommonHeader";

import { motion as a } from "framer-motion";

const MostUnderratedAssetPost = () => {
  const textAnimation = {
    hidden: { opacity: 0, filter: "blur(15px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };
  return (
    <>
      <PageMetadata PageTitle={"The most underrated business asset"} />
      <TopGradient
        gradientFromLeft={`from-[#57ebde]`}
        gradientToRight={`to-[#aefb2a]`}
      />
      <BlogPageWrapper>
        <BlogInfoBar postDate={"7th June 2024"} postAuthor={"William Jones"} />
        <div className="pt-[1rem] lg:pt-[2.5rem]">
          <CommonHeader headerText={"The most underrated business asset"} />
        </div>
        <section className="pt-[1rem] lg:pt-[2.5rem]">
          <a.p
            className="2xl:text-lg"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.15 }}
            variants={textAnimation}
          >
            If you're like most business owners, you're probably someone that's
            concerned with the ROI of your investments.
            <br />
            <br />
            And it's very likely that one of your significant initial
            investments was your website.
            <br />
            <br />
            Maybe you didn't think much of it at the time, I mean that agency
            handled it all right?
            <br />
            <br />
            Or maybe you built it yourself like 32% of other small businesses,
            and instead of investing your capital you invested countless hours
            of your time to build it.
            <br />
            <br />
            But is that website serving your business in the best way possible?
            <br />
            <br />
            After all, your website IS your business.
            <br />
            <br />
            It's likely the central hub where all your customers will see.
            <br />
            <br />
            But what if that central hub had some of these issues:
            <br />
            <br />
            - Slow loading speeds
            <br />
            - Hard to find or no call to actions
            <br />
            - A confusing onboarding process
            <br />
            - Unfortunate or dated user interface (UI) design
            <br />
            - And more...
            <br />
            <br />
            All of these things are chasing your visitors away.
            <br />
            <br />
            It's screaming "Don't buy from us!", planting a massive red flag in
            the ground.
            <br />
            <br />
            It's no lie that:
            <br />
            <br />
            - 50% of visitor's first impressions of your business relate to your
            website's design.
            <br />
            - 70% of small business websites don't even have a call to action
            button.
            <br />
            - Bounce rate increases by 32% as page load time goes from 1 to 3
            seconds.
            <br />
            <br />
            And the worst part - it's pretty likely that your website isn't
            performing its best in at least one of these departments.
            <br />
            <br />
            But the good news is, neither are your competitor's websites
            (probably).
            <br />
            <br />
            If you're a well established business that's been operating for a
            few years then you probably have some traffic coming to your site
            organically.
            <br />
            <br />
            And while nearly everyone is worried about how and where they're
            going to get more traffic from, they neglect key issues with the
            website they're sending traffic to.
            <br />
            <br />
            Talk about lighting cash on fire.
            <br />
            <br />
            <strong>That's where you could be different.</strong>
            <br />
            <br />
            You wouldn't say no to a few more clients, so why should your
            website be turning them away?
            <br />
            <br />
            Just imagine what you could do with the current organic traffic
            you're getting.
            <br />
            <br />
            And if you're someone who runs ads to your website, just imagine
            having to sacrifice LESS of your precious marketing dollars to
            Facebook.
            <br />
            <br />
            Zuckerberg doesn't need anymore of your money!
            <br />
            <br />
            All by changing just a couple of key aspects on your website
            <br />
            <br />
            For basically NO COST.
            <br />
            <br />
            And you could take action on it as early as today.
            <br />
            <br />
            You're actually just a few changes away from:
            <br />
            <br />
            - Cheaper conversions
            <br />
            - Better return on ad spend
            <br />
            - More satisfied customers
            <br />
            <br />
            But the truth is, you're busy, I get that.
            <br />
            <br />
            But can this really wait?
            <br />
            <br />
            Are you in a place where you can afford to be losing customers to
            bad user experience?
            <br />
            <br />
            I don't think anyone can.
            <br />
            <br />
            That's why I urge anyone that uses a website to do business in any
            form to stay up to date with modern web design best practices.
            <br />
            <br />
            Because sometimes growth can be unlocked through tending to assets
            that are already there.
          </a.p>
        </section>
      </BlogPageWrapper>
    </>
  );
};

export default MostUnderratedAssetPost;
