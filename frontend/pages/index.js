import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";



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
        <div className={styles.bannercontent}>
          <h3 className={styles.bannerText}> YOU DREAM IT, WE BUILD IT</h3>
         <p className={styles.bannerp}>Materialize Your Ideal Property With Us</p>
</div>
        </div>

<div className={styles.explore}>
  <h1 className={styles.exploreh}>Explore Properties In Nigeria</h1>
        <div className={styles.cardcontainer}>
        <div className={styles.explorecards}>
    <div className={styles.explorecard} >
      <h3>What we do</h3>
      <p>BJF Properties and Development Company Ltd. deals with Property Development, Property Management, Buying and Selling of property, Property Consultancy and much more.
</p>
    </div>

    <div className={styles.explorecard}>
    <h3>Our Vision</h3>
    <p>To be the Topmost property solution provider globally.</p>
    </div>

    <div className={styles.explorecard} >
    <h3>Our Mission</h3>
      <p>Our Mission is to provide both clients Locally and in Diaspora with the property of their dreams without having to go through family and friends' Trust issues.
</p>
    </div>
    </div>
  </div>
  </div>

        {/* Chairman Section */}
        
        <section className={styles.cmcon} >
          <div className={styles.cm}>
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
              
                <a href="/about"> Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <div className={styles.cert}>
        <h5 className={styles.certHeader}> We Are Certified </h5>
        <div className={styles.certimg}>

        <Image src="/certificate.svg" alt=""  width={500} height={500}/>
        </div>
      </div>

      </div>
    </>
  );
}
