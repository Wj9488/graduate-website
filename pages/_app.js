import "@/styles/globals.css";
import localFont from "next/font/local";
import AlternativeMenu from "@/components/sitewide/AlternativeMenu";
import ScrollProgress from "@/components/sitewide/ScrollProgress";
import Footer from "@/components/sitewide/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

const HelveticaNeue = localFont({
  src: [
    {
      path: "./Fonts/HelveticaNeueRoman.otf",
      weight: "400",
    },
    {
      path: "./Fonts/HelveticaNeueMedium.otf",
      weight: "500",
    },
  ],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={`${HelveticaNeue.className} `}>
      <AlternativeMenu />
      <Component {...pageProps} />
      <ScrollProgress />
      <Footer />
    </div>
  );
}
