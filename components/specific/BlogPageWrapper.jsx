import Nav from "../sitewide/Nav"

const BlogPageWrapper = ({children}) => {
  return (
    <main>
        <Nav />
        <div className="pt-[6rem] lg:pt-[8rem] 2xl:pt-[15rem] 3xl:pt-[17.5rem] min-h-[100dvh]">
            {children}
        </div>
    </main>
  )
}

export default BlogPageWrapper