import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>KESHO WEBSITE 2.0</header>
      <Footer />
    </div>
  );
}
