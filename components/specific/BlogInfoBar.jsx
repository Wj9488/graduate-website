

const BlogInfoBar = ({postDate, postAuthor}) => {
  return (
    <div className='flex gap-2'>
        <p className='text__c_reduced_black sm:text-sm text-base 2xl:text-lg'>{postAuthor}</p>
        <p className="text__c_reduced_black sm:text-sm text-base 2xl:text-lg">|</p>
        <p className='text__c_reduced_black sm:text-sm text-base 2xl:text-lg'>{postDate}</p>
    </div>
  )
}

export default BlogInfoBar