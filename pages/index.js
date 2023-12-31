import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Feature";
import Download from "../components/Download";
import FAQs from "../components/FAQs";
import UpdateSection from "../components/UpdateSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Bookmark landing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Header />
      <HeroSection />
      <Feature />
      <Download />
      <FAQs />
      <UpdateSection />
      <Footer />
    </div>
  );
}
