import Image from "next/image"
import Link from "next/link"

const ProjectShowcase = ({imageSource, projectLink, projectLinkText, reducedOpacityText, projectTitle, largeScreenWidth, extraLargeScreenWidth }) => {
  return (
    <div className="standard__x_padding">
        <Image
            src={imageSource} 
            width={500}
            height={"auto"}
            placeholder="blur"
            className={`w-full ${largeScreenWidth} ${extraLargeScreenWidth}`}
        />
        <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl pt-[1rem] lg:pt-[2.5rem]">{projectTitle}
            <br />
            <span className="text__c_reduced_black">{reducedOpacityText}</span>
        </p>
        <p className="2xl:text-lg pt-[1rem] lg:pt-[2.5rem]">In collaboration with: <Link className="text__c_black underline" href={projectLink} target="_blank">{projectLinkText}</Link></p>
    </div>
  )
}

export default ProjectShowcase