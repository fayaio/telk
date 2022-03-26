import Head from "next/head";
import Image from "next/image";
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
        <h5 className={styles.cmHeader}> From Our Chairman </h5>

        <div className={styles.cmSection}>
          <div className={styles.cmWrapper}>
          <div className={styles.cmImgwrapper}>
            <img className={styles.cmImg} src="./chairmanpic.svg" alt="" />
            </div>
            <div className={styles.cmContent}>
              <h4 className={styles.cmTitle}> BJF Properties </h4>
              <h2 className={styles.cmSubtitle}>Chairman's Speech </h2>
              <p className={styles.cmParagraph}>
                While growing up, one of my dreams has been to build a company
                that offers trust-based services. Thus, further down the years,
                I developed an interest in the property development business.
                This interest was primarily due to my family's acquisition of
                some landed properties in Ajah, Lagos State, Nigeria. Indeed, my
                family was one of those to own land in the then developing area
                of Lagos State in the early 1990s.
              </p>
              <a href="#" className={styles.cmAnchor}>Read More</a>
            </div>
          </div>
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
