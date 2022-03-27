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
        <section className={styles.cm}>
          <div className={styles.main}>
            <img src="./chairmanpic.svg" alt="" />
            <div className={styles.cmContent}>
              <h1 className={styles.cmHeader}>From The Chairman</h1>
              <p className={styles.cmText}>
                While growing up, one of my dreams has been to build a company
                that offers trust-based services. Thus, further down the years,
                I developed an interest in the property development business.
                This interest was primarily due to my family's acquisition of
                some landed properties in Ajah, Lagos State, Nigeria. Indeed, my
                family was one of those to own land in the then developing area
                of Lagos State in the early 1990s.
              </p>
              <div className={styles.cmAnchor} type="button">
              
                Read More
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <div className={styles.cert}>
        <h5 className={styles.certHeader}> Certificate</h5>
        <div className={styles.certimg}>

        <Image src="/certificate.svg" alt=""  width={500} height={500}/>
        </div>
      </div>

      </div>
    </>
  );
}
