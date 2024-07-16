import Head from "next/head"

const PageMetadata = ({ PageTitle }) => {
  return (
    <Head>
    <title>{PageTitle} | William Jones</title>
    <link rel="shortcut icon" href="site__icon.png" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="William Jones" />
    <meta property="og:description" content="Find out more about me." />
    <meta name="description" content="Find out more about me." />
    <meta property="og:image" content="/site-icon.png" />
    <meta name="keywords" content="" />
  </Head>
  )
}

export default PageMetadata