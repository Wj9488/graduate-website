import Head from "next/head"

const PageMetadata = ({ PageTitle }) => {
  return (
    <Head>
    <title>{PageTitle} | William Jones</title>
    <link rel="shortcut icon" href="/icon.png" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="William Jones" />
    <meta property="og:description" content="I'm a recent Business Management graduate from Exeter University holding a First Class degree in Business Management.
    I'm a bilingual English / French national. Tap the link to find out more about me. " />
    <meta name="description" content="I'm a recent Business Management graduate from Exeter University holding a First Class degree in Business Management.
    I'm a bilingual English / French national. Tap the link to find out more about me. 
    " />
    <meta property="og:image" content="/og-image-default.webp" />
    <meta property="og:title" content={`${PageTitle} | William Jones`}/>
    <meta name="keywords" content="" />
    <meta name="google-site-verification" content="mClr6asdHIAydRru8hYvdGTTAI50DaryuO3MtRtucNU" />
  </Head>
  )
}

export default PageMetadata