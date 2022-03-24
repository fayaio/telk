import Head from "next/head";
import styles from "../styles/Home.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>BJF Properties | Home</title>
        <meta name="keywords" content="BJF Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeContainer}>

      {/* Banner Section */}
      <div className={styles.bannerContainer}>
        <h3 className={styles.bannerText}> YOU DREAM IT, WE BUILD IT</h3>
      </div>

      {/* Explore Section */}
      <div className={styles.exploreContainer}>
        <h5 className={styles.exploreText}> Explore Properties In Nigeria</h5>
        <div className={styles.exploreContent}></div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonialContainer}>
        <h5 className={styles.testimonialHeaderText}> Testimonials</h5>
        <p className={styles.testimonialSubHeaderText}> What our customers say about us</p>
       
      </div>

      </div>
    </>
  );
}
