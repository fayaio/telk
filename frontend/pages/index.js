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

      {/* Chairman Section */}
      <div className={styles.chairmanContainer}>
        <h5 className={styles.chairmanText}> From Our Chairman </h5>
        <div className={styles.chairmanContent}></div>
      </div>




      {/* Testimonials Section */}
      {/* <div className={styles.testimonialContainer}>
        <h5 className={styles.testimonialHeaderText}> Testimonials</h5>
        <p className={styles.testimonialSubHeaderText}> What our customers say about us</p>
       
      </div> */}

      </div>
    </>
  );
}
