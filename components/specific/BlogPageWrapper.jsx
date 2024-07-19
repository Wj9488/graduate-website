import Nav from "../sitewide/Nav"

const BlogPageWrapper = ({children}) => {
  return (
    <main>
        <Nav />
        <div className="py-[6rem] lg:py-[8rem] 2xl:py-[15rem] 3xl:py-[17.5rem] min-h-[100dvh] px-[0.5rem] lg:px-[20rem] xl:px-[25rem] 2xl:px-[30rem]">
            {children}
        </div>
    </main>
  )
}

export default BlogPageWrapper