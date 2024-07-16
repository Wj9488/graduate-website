import Link from "next/link";

const BlogListItem = ({ postTitle, postHref, gradientFrom, gradientTo, postNumber, setHoveredPost }) => {
  return (
    <li
      className="flex items-start justify-between w-[fit-content]"
      onMouseEnter={() => setHoveredPost({ postNumber, gradientFrom, gradientTo })}
      onMouseLeave={() => setHoveredPost(null)}
    >
      <p className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium hover:opacity-50 transition-colors duration-200 ease-in-out"
      >
        <Link className={`hover:opacity-50 transition-all duration-200 ${gradientFrom} ${gradientTo}`} href={`/blog/${postHref}`}>
          {postNumber}. {postTitle}
        </Link>
      </p>
    </li>
  );
};

export default BlogListItem;
