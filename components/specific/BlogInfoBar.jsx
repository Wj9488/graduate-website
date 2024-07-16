

const BlogInfoBar = ({postDate, postAuthor}) => {
  return (
    <div className='flex gap-2'>
        <p className='text__c_black 2xl:text-lg py-2 px-4 bg-[#ebebeb] rounded-2xl'>Written by: {postAuthor}</p>
        <p className='text__c_reduced_black 2xl:text-lg py-2 px-4 bg-[#ebebeb] rounded-2xl'>{postDate}</p>
    </div>
  )
}

export default BlogInfoBar