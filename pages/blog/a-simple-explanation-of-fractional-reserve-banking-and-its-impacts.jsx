import BlogPageWrapper from "@/components/specific/BlogPageWrapper";
import PageMetadata from "@/components/sitewide/PageMetadata";

import Link from "next/link";

import FractionalReserveImage from "@/public/images/blogImages/fraction-reserve-banking.webp";
import SourceDisplay from "@/components/specific/SourceDisplay";

const FractionalReservePost = () => {
  return (
    <>
      <PageMetadata
        PageTitle={
          "A simple explanation of fractional reserve banking and its impacts | Blog | William Jones"
        }
      />
      <BlogPageWrapper
        author={"William Jones"}
        date={"September 12, 2024"}
        blogLabel={"Learning"}
        blogTitle={
          "A simple explanation of fractional reserve banking and its impacts."
        }
        desktopImageSrc={FractionalReserveImage}
        mobileImageSrc={FractionalReserveImage}
        animatedTopText={
          "Fractional reserve banking is one of the most important components of modern finance, and it's also one of the backbones of the argument that 'money is not real'. Fractional reserve banking allows the creation of new money and increases the money supply to some positive and negative effects."
        }
      >
        <p>
          I'm sure you've heard someone say to you before "hey bro money's not
          even real" before they go ahead and purchase something dumb. But it
          turns out your likely drunk friend isn't too far from the truth.
          <br />
          <br />
          Fractional reserve banking is an obligation for banks to keep a
          certain percentage of deposits in reserve, usually set at 10%.
          <br />
          <br />
          This is a fun thing to work through, because it's usually a rather
          confusing thing to think about how that reserve requirement creates
          new money in the economy.
          <br />
          <br />
          But I'll give explaining it my best shot with an example that doesn't
          include me using several items on a Wetherspoons table.
          <br />
          <br />
          Ok, so let's say you deposit $10,000 into Bank A.
          <br />
          <br />
          The bank only keeps 10% so in reality the money that actually stays
          with Bank A is only $1,000.
          <br />
          <br />
          So where does that $9,000 go?
          <br />
          <br />
          Well the bank usually lends it out to businesses or individuals. And
          what do those individuals usually do with a bank loan?
          <br />
          <br />
          They keep it in a bank.
          <br />
          <br />
          So $9,000 ends up in Bank B in this example.
          <br />
          <br />
          Bank B is still bound by the same 10% reserve requirement as Bank A,
          so it keeps $900 of the deposit and lends out $8,100.
          <br />
          <br />
          Where does that $8,100 go? You guessed it.
          <br />
          <br />
          Bank C takes it as a deposit.
          <br />
          <br />
          And Bank C only keeps 10% ($810) and lends out the rest. See what's
          happening here?
          <br />
          <br />
          The key thing to remember is that while banks are only obligated to
          keep 10% of deposits, they still owe you 100% of your money back.
          <br />
          <br />
          So let's revisit the example here.
          <br />
          <br />
          Each person banking with A, B and C are all owed 100% of their deposit
          should they request it. So all of them effectively have a claim on:
          <br />
          <br />
        </p>
        <ul className="ml-8">
          <li className="list-disc">$10,000</li>
          <li className="list-disc">$9,000</li>
          <li className="list-disc">$8,100</li>
        </ul>
        <p>
          <br />
          That brings the total owed money to $27,100 from an initial deposit of
          $10,000.
          <br />
          <br />
          Of course this cycle keeps going until the amounts get so
          insignificant it's not worth counting anymore but as a rule of thumb
          with a 10% fractional reserve requirement you can expect the deposited
          amount to 10x in value.
          <br />
          <br />
          You can see this if you play out the math:
          <br />
          <br />
          $10,000 (Bank A) + $9,000 (Bank B) + $8,100 (Bank C) + $7,290 (Bank D)
          + $6,561 (Bank E) + <span className="italic">and so on.</span>
          <br />
          <br />
          </p>
          <h2 className="font-medium underline">
            So why is this a good thing?
          </h2>
          <p>
          <br />
          Well, this system effectively allows the money supply to increase
          without the need to print actual notes. That means more money can be
          loaned out for productive uses like investment, business expansion or
          consumption.
          <br />
          <br />
          The increase in money supply also allows banks to lend much more money
          to various sectors of the economy supporting job creation and
          innovation.
          <br />
          <br />
          And of course it makes sense for the banks, they can make money by
          lending out deposits to further expand their operations and grow as
          businesses.
          <br />
          <br />
          </p>
          <h3 className="font-medium underline">What are the negatives?</h3>
          <p>
          <br />
          There's actually a lot!
          <br />
          <br />
          Inflation - that's the hot one on everyone's mind. Fractional reserve
          banking is an effective contributor towards inflation in a few ways:
          <br />
          <br />
          1. <span className="font-medium">Demand pull inflation:</span> Amount
          of goods remains the same while the amount of money in the system
          increases through lending. This means more money chases the same
          amount of goods. So the price of goods goes up because most bidders
          suddenly have more money.
          <br />
          <br />
          2. <span className="font-medium">An amplification effect:</span> the
          more banks loan, the more money is in the system, creating even more
          bidders with even more money to spend on the same amount of goods and
          services.
          <br />
          <br />
          3. <span className="font-medium">Asset price inflation:</span>
          in the real world, all this money doesn't go only to goods and
          services, a lot of it ends up in assets. Increased credit availability
          often leads to inflated prices in the real estate and stock markets as
          more money is injected into these sectors.
          <br />
          <br />
          4.{" "}
          <span className="font-medium">
            Indirect contribution to cost-plus inflation:
          </span>{" "}
          This is where businesses borrow a lot of money from banks to expand or
          cover costs, increasing demand for raw materials and labour. As
          businesses compete over limited labour and resources, the prices of
          these assets are driven up causing businesses to spend more and
          therefore have to push higher prices onto consumers.
          <br />
          <br />
          Fractional reserve banking is more famously known for causing serious
          <span className="font-medium"> bank runs</span>.
          <br />
          <br />
          Since banks only hold a small portion of the true money that is owed
          to the customer, if enough customers demanded withdrawals in full the
          bank would run out of money on hand to meet demand. A recent one that
          made headlines was Silicon Valley Bank which had to process over $42
          billion in withdrawals in one day
          <sup className="text-orange-500">
            <Link href={"https://fortune.com/2023/03/11/silicon-valley-bank-run-42-billion-attempted-withdrawals-in-one-day/"} target="_blank">{"(1)"}</Link>
            
          </sup>
          .
          <br />
          <br />
          Another nasty thing that fractional reserve banking can cause is{" "}
          <span className="font-medium">overextension of credit</span> sometimes
          creating massive <span className="font-medium">debt bubbles</span>{" "}
          where people and businesses take on way more debt than they can afford
          to repay. If enough people fail to pay back their loans it can
          destabilise the whole financial system and cause spectacular collapses
          like the Chinese Evergrande group defaulting on over $300 billion of
          debt{" "}
          <sup className="text-orange-500">
            <Link href={"https://www.washingtonpost.com/world/2024/01/28/china-evergrande-property-developer-liquiidate/"} target="_blank">{"(2)"}</Link>
          </sup>
          .
          <br />
          <br />
          To conclude, your friend was partly right, most money isn't real -
          it's created through many bank deposits of lended money.
          <br />
          <br />
        </p>
      </BlogPageWrapper>
    </>
  );
};

export default FractionalReservePost;
