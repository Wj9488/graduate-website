import BlogPageWrapper from "@/components/specific/BlogPageWrapper";
import PageMetadata from "@/components/sitewide/PageMetadata";

import Link from "next/link";

import Charlie from "@/public/images/blogImages/charlie_munger.webp";

const CharlieMungerPost = () => {
  return (
    <>
      <PageMetadata
        PageTitle={
          "Lessons from Charlie Munger's talk 11 'The psychology of human misjudgement' | Blog | William Jones"
        }
      />
      <BlogPageWrapper
        author={"William Jones"}
        date={"July 21, 2024"}
        blogLabel={"Learning"}
        blogTitle={
          "Lessons from Charlie Munger, a summary of talk 11 'The Psychology of Human Misjudgement'."
        }
        desktopImageSrc={Charlie}
        mobileImageSrc={Charlie}
        animatedTopText={
          "I chose to write this post both for my own benefit and hopefully for the benefit of others. I wanted a complete and easily accessible list of the most common psychological failings in human beings. Thankfully Charlie Munger compiled a thorough list. Enjoy."
        }
      >
        <h2 className="text-xl underline font-medium mb-4">
          1. Reward and punishment superresponse tendency
        </h2>

        <p className="mb-8">
          People are highly motivated by incentives and will often act in line
          with rewards or punishments, sometimes irrationally.
        </p>

        <p className="text-3xl lg:text-4xl times mb-8">
          “Incentives are superpowers.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=18.65%"
              }
              target="_blank"
            >{"(1)"}</Link>
          </sup>
        </p>
        <p className="mb-8">Charlie emphasises the use of 
          proper and carefully thought out incentive structures in business to achieve desired outcomes and how drastically 
          wrong things can go if incentives aren't aligned properly.  
          </p>
        <p className="text-3xl lg:text-4xl times mb-8">
          “Dread, and avoid as much you can, rewarding people for what can be easily faked.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=26%"
              }
              target="_blank"
            >{"(2)"}</Link>
          </sup>
        </p>

        <h3 className="text-xl underline font-medium mb-4">
          2. Liking/Loving tendency
        </h3>

        <p className="mb-4">
          This is a really common one where people ovestimate positive
          attributes of things or people they like, leading to biased judgement.
          This tendency usually sees people ignoring flaws or negative aspects
          of situations, things, or people.
        </p>

        <h4 className="text-xl underline font-medium mb-4">
          3. Disliking/Hating tendency
        </h4>

        <p className="mb-4">
          This one is the reverse of liking/loving tendency. It's where people
          will have accentuated hatred for those or things they dislike. This
          causes people to completely ignore positive qualities.
        </p>

        <h5 className="text-xl underline font-medium mb-4">
          4. Doubt-avoidance tendency
        </h5>

        <p className="mb-4">
          When presented with a difficult or complex choice, people usually seek
          certainty even when it leads to irrational or hasty decision making.
          People would rather come to quick conclusions than dwell in
          uncertainty.
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          5. Inconsistency-avoidance tendency
        </h6>

        <p className="mb-8">
          People dislike changing their beliefs or behaviours. Once committed to
          a decision or viewpoint people tend to stick with it, even in the face
          of true contradictory evidence.
        </p>
        <p className="text-3xl lg:text-4xl times mb-8">
          “Proper education is one long exercise in the augmentation of high cognition so that our wisdom becomes strong enough to destroy wrong thinking maintained by resistance to change.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=35%"
              }
              target="_blank"
            >{"(3)"}</Link>
          </sup>
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          6. Curiosity tendency
        </h6>

        <p className="mb-4">
          Human curiosity drives us to learn and explore, which can lead to both
          positive innovation through the acquiring or combining of ideas or it
          can lead to negative outcomes like overconsumption of useless
          information.
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          7. Kantian fairness tendency
        </h6>

        <p className="mb-4">
          Most individuals value fairness and will often act in ways that are
          perceived as just, even at personal cost. For example splitting
          lining up so the first to come are the first to be served 
          or allowing someone to merge in front of you on the motorway. This can sometimes
          lead to inefficient or suboptimal decisions.
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          8. Envy/jealousy tendency
        </h6>

        <p className="mb-8">
          People are prone to envy, which can lead to irrational actions driven
          by the desire to possess what others have or to undermine other's
          success.
        </p>
        <p className="text-3xl lg:text-4xl times mb-8">
          “It is not greed that drives the world but envy.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=41%"
              }
              target="_blank"
              className=""
            >{"(4)"}</Link>
          </sup>
          <div className="font-mono text-xs lg:text-sm border w-[fit-content] border-black py-[1px] px-2 rounded mt-2">WARREN BUFFET</div>
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          9. Reciprocation tendency
        </h6>

        <p className="mb-4">
          Humans feel compelled to return favours or good deeds. This natural
          tendency can be exploited to great effectiveness by other individuals
          as people are likely to be manipulated through acts of reciprocity.
          For example, a car salesman might park you in a really comfortable
          seat and hand you a cup of coffee. In return you'll subconsciously
          want to return the favour, and in many cases that means you parting
          with more money for the car.
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          10. Influence-from-mere-association tendency
        </h6>

        <p className="mb-8">
          People tend to judge objects, individuals, or ideas based on their
          associations. Positive or negative traits from one aspect can transfer
          onto unrelated matters. Let's say you played various games in a casino
          and won more than you lost, some might associate these wins with a
          natural skill for gambling to their great misfortune.
        </p>

        <p className="text-3xl lg:text-4xl times mb-8">
        “Even association that appears to be trivial, if carefully planned, can have extreme and peculiar effects on purchasers of products.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=50%"
              }
              target="_blank"
            >{"(5)"}</Link>
          </sup>
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          11. Simple, pain-avoiding psychological denial
        </h6>

        <p className="mb-4">
          When reality becomes too painful to accept, people may deny it rather
          than accept it, distorting their view of the world to avoid
          discomfort.
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          12. Excessive self regard tendency
        </h6>

        <p className="mb-8">
          Individuals often overestimate their own abilities, skills, or
          qualities, leading to overconfidence and poor decision-making as well
          as biased hiring.
        </p>

        <p className="text-3xl lg:text-4xl times mb-8">
        “Some of the worst consequences in modern life come when dysfunctional groups of cliquish persons, dominated by excessive self-regard tendency, select as new members of their organizations persons who are very much like themselves.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=56.66%"
              }
              target="_blank"
            >{"(6)"}</Link> 
          </sup>
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          13. Overoptimism tendency
        </h6>

        <p className="mb-4">
          People tend to be overly optimistic about the future, often believing
          things will turn out better than they realistically will, especially
          when they are personally involved. Charlie points out that in a study
          on Swedish drivers 90% of them appraised their driving skill as "above
          average" when this cannot possibly be true in reality.
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          14. Deprival-superreaction tendency
        </h6>

        <p className="mb-8">
          People overreact to the prospect of losing something they value,
          leading them to irrationally avoid loss even when the risk is minor.
        </p>

        <p className="text-3xl lg:text-4xl times mb-8">
        “The quantity of man’s pleasure from a $10 gain does not exactly match the quantity of his displeasure from a $10 loss.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=62.24%"
              }
              target="_blank"
            >{"(7)"}</Link> 
          </sup>
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          15. Social-proof tendency
        </h6>

        <p className="mb-8">
          People tend to follow the crowd, assuming that the majority must be
          right. This leads to groupthink and can cause huge errors when the
          crowd is wrong.
        </p>

        <p className="text-3xl lg:text-4xl times mb-8">
        “Learn how to ignore the examples from others when they are wrong, because few skills are more worth having.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=71%"
              }
              target="_blank"
            >{"(8)"}</Link> 
          </sup>
        </p>


        <h6 className="text-xl underline font-medium mb-4">
          16. Contrast-misreaction tendency
        </h6>

        <p className="mb-8">
          Judgements are often influenced by comparing situations rather than
          evaluating them on their own merits. People may accept unfavourable
          outcomes if they are presented alongside something worse.
        </p>
        <p className="text-3xl lg:text-4xl times mb-8">
          "When a man’s steps are consecutively taken toward disaster, with each
          step being very small, the brain’s contrast-misreaction tendency will
          often let the man go too far toward disaster to be able to avoid it"{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=71.95%"
              }
              target="_blank"
            >{"(9)"}</Link>
          </sup>
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          17. Stress-influence tendency
        </h6>

        <p className="mb-4">
          Under stress, people are more likely to make poor decisions as their cognitive abilities 
          decline and they become more reactive.
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          18. Availability-misweighing tendency
        </h6>

        <p className="mb-4">
          People give undue importance to information that is easily available to them, often neglecting
          facts or data that are harder to recall or access.
        </p>

        <p className="text-3xl lg:text-4xl times mb-8">
          “An idea or a fact is not worth more merely because it is easily available to you.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.stripe.press/poor-charlies-almanack/talk-eleven?progress=76%"
              }
              target="_blank"
            >{"(10)"}</Link>
          </sup>
        </p>


        <h6 className="text-xl underline font-medium mb-4">
          19. Use-it-or-lose-it tendency
        </h6>

        <p className="mb-4">
          Skills or knowledge that aren't regularly put to use are forgotten, leading to loss of expertise
          or ability over time. 
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          20. Drug-misinfluence tendency
        </h6>

        <p className="mb-4">
          Nothing good comes from taking drugs. People are led to making decisions they wouldn't make 
          sober, usually making worse decisions than if they were. 
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          21. Senescence-misinfluence tendency
        </h6>

        <p className="mb-4">
          Ageing effects cognitive function, leading older individuals to make decisions differently as their
          mental faculties change. 
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          22. Authority-misinfluence tendency
        </h6>

        <p className="mb-4">
          People are more likely to follow or be influenced by those in positions of authority, even when the 
          authority figure is wrong. Stanley Milgram's experiments demonstrated this effectively where 65% of participants, led by a perceived authority figure, 
          gave lethal shocks to other study participants because they were told to. 
        </p>

        <p className="text-3xl lg:text-4xl times mb-8">
          “Ordinary people, simply doing their jobs, and without any particular hostility on their part, can become agents in a terrible destructive process.”{" "}
          <sup className="text-orange-500">
            <Link
              href={
                "https://www.goodreads.com/author/quotes/134222.Stanley_Milgram"
              }
              target="_blank" 
              className=""
            >{"(11)"}</Link>
          </sup>
          <div className="font-mono text-xs lg:text-sm border w-[fit-content] border-black py-[1px] px-2 rounded mt-2">STANLEY MILGRAM</div>
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          23. Twaddle tendency
        </h6>

        <p className="mb-4">
          People are naturally inclined to engage in irrelevant or trivial conversations, wasting time on
          unimportant things. 
        </p>

        <h6 className="text-xl underline font-medium mb-4">
          24. Reason-respecting tendency
        </h6>

        <p className="mb-4">
          Humans have a tendency to follow reasons, even when those reasons aren't valid. If someone gives
          rationale, people are more likely to comply, even if the rationale is flawed. 
        </p>
        <h6 className="text-xl underline font-medium mb-4">
          25. Lollapalooza tendency—the tendency to get extreme consequences
          from confluences of psychological tendencies acting in favor of a
          particular outcome
        </h6>

        <p className="mb-4">
        This is a combination of several biases or tendencies acting together, 
        which can result in extreme outcomes. When multiple tendencies align, 
        their combined effects can lead to major misjudgments.
        </p>
      </BlogPageWrapper>
    </>
  );
};

export default CharlieMungerPost;
