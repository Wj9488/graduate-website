const BlogInfoBar = ({ postDate, postAuthor, blogLabel }) => {
  return (
    <div className="flex gap-2 pxs-b items-center">
      <div className="bg-gray-200 py-1 px-2 rounded mr-2">
        <p className="text-xs lg:text-sm">{blogLabel}</p>
      </div>
      <p className="text__c_reduced_black text-xs lg:text-sm">{postAuthor}</p>
      <p className="text__c_reduced_black text-xs lg:text-sm">|</p>
      <p className="text__c_reduced_black text-xs lg:text-sm">{postDate}</p>
    </div>
  );
};

export default BlogInfoBar;
