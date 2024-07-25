import Image from "next/image";
import Link from "next/link";
import { motion as a } from "framer-motion";

const ProjectShowcase = ({
  imageSource,
  projectLink,
  projectLinkText,
  reducedOpacityText,
  projectTitle,
  largeScreenWidth,
  extraLargeScreenWidth,
  liveLink,
  ButtonLiveLinkText
}) => {
  return (
    <div className="standard__x_padding relative group ">
      <Link href={liveLink} target="_blank" className="">
        <div className="relative ">
          <Image
            src={imageSource}
            width={500}
            height={"auto"}
            placeholder="blur"
            className={`w-full ${largeScreenWidth} ${extraLargeScreenWidth}`}
          />
          <div
            className="absolute top-0 flex items-center justify-center lg:hidden"
          >
              <div className="accent__c_white py-1 px-2 2xl:text-lg flex gap-1 items-center rounded-br-2xl">
                <p>{ButtonLiveLinkText}</p>
                <svg  
                width="21"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3807 9.1895L9.38181 9.19603L9.38181 5.05685L4.02176 10.4169L3.3036 9.69874L8.66365 4.33869L4.53099 4.34522V3.3398H10.3807V9.1895Z"
                  fill="#070707"
                />
              </svg>
            </div>
          </div>
          <a.div
            className="absolute inset-0 flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100"
            initial={{ opacity: 0, filter: "blur(15px)" }}
            whileHover={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
              <div className="rounded-2xl accent__c_white py-2 px-4 2xl:text-lg flex gap-1 items-center">
                <p>{ButtonLiveLinkText}</p>
                <svg
                width="21"
                height="20"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3807 9.1895L9.38181 9.19603L9.38181 5.05685L4.02176 10.4169L3.3036 9.69874L8.66365 4.33869L4.53099 4.34522V3.3398H10.3807V9.1895Z"
                  fill="#070707"
                />
              </svg>
            </div>
          </a.div>
        </div>
      </Link>
      <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl pt-[1rem] lg:pt-[2.5rem]">
        {projectTitle}
        <br />
        <span className="text__c_reduced_black">{reducedOpacityText}</span>
      </p>
      <p className="2xl:text-lg pt-[1rem] lg:pt-[2.5rem]">
        In collaboration with:{" "}
        <Link
          className="text__c_black underline"
          href={projectLink}
          target="_blank"
        >
          {projectLinkText}
        </Link>
      </p>
    </div>
  );
};

export default ProjectShowcase;
