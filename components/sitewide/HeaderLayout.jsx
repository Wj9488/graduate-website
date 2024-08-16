import { motion as a } from "framer-motion";
import CommonHeader from "./CommonHeader";

const HeaderLayout = ({ HeaderMainTitle, HeaderSecondarySmallText, HeaderMediumText, HeaderMediumTextGray }) => {
  const textAnimation = {
    hidden: { y: 2.5, opacity: 0, filter: "blur(15px)" },
    visible: { y: 0 , opacity: 1, filter: "blur(0px)" }
  };

  return (
    <header className="pt-[6rem] lg:pt-[8rem] 2xl:pt-[15rem] 3xl:pt-[17.5rem]">
      <div className="header__grid standard__x_padding">
        <div id="HeaderText" className="justify-self-start">
          <CommonHeader headerText={HeaderMainTitle}/>
        </div>
        <a.div
          id="SmallText"
          className="justify-self-center pt-[2.5rem] lg:pt-0"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.25 }}
          variants={textAnimation}
        >
          <p className="2xl:text-lg">{HeaderSecondarySmallText}</p>
        </a.div>
        <a.div
          id="MediumText"
          className="justify-self-end pt-[2.5rem] lg:pt-0"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.25 }}
          variants={textAnimation}
        >
          <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {HeaderMediumText}
            <br />
            <span className="text__c_reduced_black">{HeaderMediumTextGray}</span>
          </p>
        </a.div>
      </div>
    </header>
  );
};

export default HeaderLayout;
