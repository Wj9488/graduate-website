import Image from "next/image";
import Link from "next/link";

import { motion as a } from "framer-motion"

const BlogTile = ({ src, alt, blogTitle, blogDate, href, blogType }) => {
  return (
    <a.div className="relative group"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: .25 }}
    >
      <Link href={href}>
        <div className="relative">
          <div className="absolute top-2 left-2 flex items-center justify-center">
            <div className="accent__c_white py-1 px-2 rounded">
              <p className="text-xs lg:text-sm">{blogType}</p>
            </div>
          </div>
            <Image
              src={src}
              alt={alt}
              height={1200}
              width={1800}
              className="pxs-b w-full h-auto"
            />
          <p className="pb-[0.3125rem] text-xs lg:text-sm">{blogDate}</p>
          {/* Apply underline on hover */}
          <p
            className="2xl:text-xl reset__line_height pb-[1.25rem] lg:pb-[0.625rem] group-hover:underline"
            id="underlineTarget"
          >
            {blogTitle}
          </p>
        </div>
      </Link>
    </a.div>
  );
};

export default BlogTile;
