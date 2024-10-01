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
  ButtonLiveLinkText,
  target
}) => {
  return (
    <div className="relative group">
      <Link href={liveLink} target={target} className="">
        <div className="relative ">
          <Image
            src={imageSource}
            width={500}
            height={"auto"}
            placeholder="blur"
            className={`w-full ${largeScreenWidth} ${extraLargeScreenWidth}`}
          />
          <div
            className="absolute top-2 left-2 flex items-center justify-center lg:hidden"
          >
              <div className="accent__c_white py-1 px-2 text-xs lg:text-sm flex gap-1 items-center rounded">
                <p>{ButtonLiveLinkText}</p>
                <svg
                      className="w-[15px] h-[15px] 2xl:w-[15px] 2xl:h-[15px]"
                      fill="#2a2a2a"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
            </div>
          </div>
          <a.div
            className="absolute inset-0 flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100"
            initial={{ opacity: 0, filter: "blur(15px)" }}
            whileHover={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
              <div className="rounded accent__c_white py-2 px-4 2xl:text-lg flex gap-1 items-center">
                <p>{ButtonLiveLinkText}</p>
                <svg
                      className="w-[16px] h-[16px] 2xl:w-[17px] 2xl:h-[17px]"
                      fill="#2a2a2a"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
            </div>
          </a.div>
        </div>
      </Link>
      <div className="flex items-start justify-between">
        <p className="text-[1.25rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1] pxs-t">
          {projectTitle}
        </p>
        <p className="text__c_reduced_black text-[1.25rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1] pxs-t">
          {reducedOpacityText}
        </p>
      </div>
      <p className="2xl:text-lg pxs-t">
        In collaboration with:{" "}
        <Link
          className="text__c_black underline hover:opacity-75 transition-all duration-200"
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
