import Head from "next/head";
import Image from "next/image";
import Stats from "../components/stats/Stats";
import Footer from "../components/footer/Footer";
import styles from "../styles/Home.module.css";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Gallery from "../components/gallery/Gallery";
import Team from "../components/team/Team";
import Partner from "../components/partners/Partner";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>KESHO WEBSITE 2.0</header>
      <About />
      <Stats />
      <Blog />
      <Gallery />
      <Team />
      <Partner/>
      <Footer />
    </div>
  );
}
