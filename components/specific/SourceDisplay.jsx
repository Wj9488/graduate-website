import Link from "next/link"

const SourceDisplay = ({ link, sourceNumber }) => {
  return (
    <Link href={link} target="_blank" className="">
        <li className="hover:underline list-disc pt-1"><div className="py-1 px-2 bg-orange-100 text-orange-500 text-xs lg:text-sm rounded-lg w-[fit-content]">Source {sourceNumber}</div>{link}</li>
    </Link>
  )
}

export default SourceDisplay