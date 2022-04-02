import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

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
            <p className={styles.bannerp}>
              Materialize Your Ideal Property With Us
            </p>
          </div>
        </div>

        {/* Explore Section */}

        <div className={styles.explore}>
          <h2 className={styles.exploreheader}>
            Explore Properties In Nigeria
          </h2>
          <ul className={styles.cards}>
            <li className={styles.cards_item}>
              <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src="./exploreimg1.svg" />
                </div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>WHAT WE DO</h2>
                  <p className={styles.card_text}>
                    BJF Properties and Development Company Ltd. deals with
                    Property Development, Property Management, Buying and
                    Selling of property, Property Consultancy and much more.
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.cards_item}>
              <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src="./exploreimg2.svg" />
                </div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>OUR VISION</h2>
                  <p className={styles.card_text}>
                    To be the Topmost property solution provider globally.
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.cards_item}>
              <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src="./exploreimg3.svg" />
                </div>
                <div className={styles.card_content}>
                  <h2 className={styles.card_title}>OUR MISSION</h2>
                  <p className={styles.card_text}>
                    Our Mission is to provide both clients Locally and in
                    Diaspora with the property of their dreams without having to
                    go through family and friends' Trust issues.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

   {/* Certificate Section */}
   <div className={styles.cert}>
          <h5 className={styles.certHeader}> We Are Certified </h5>
          <div className={styles.certimg}>
            <Image src="/certificate.svg" alt="" width={500} height={500} />
          </div>
        </div>



        <div className={styles.teamSection}>
				<div className={styles.teamContainer}>
					<h3 className={styles.teamHeader}> Meet The Team </h3>
					<div className={styles.allTeams}>
						<div className={styles.team}>
							<div className={styles.memeberFrame}>
								<img className={styles.memeberImg} src="/CEO.svg" alt="" />
								<a href="https://www.google.com/">
									<img className={styles.linkden} src="/Linkedin.svg" alt="" />
								</a>
							</div>
							<div className={styles.teamInfo}>
								<h4 className={styles.memberName}> Mr Samuel Jegede </h4>
								<p className={styles.memberRole}> Executive Chairman </p>
							</div>
						</div>
						<div className={styles.team}>
							<div className={styles.memeberFrame}>
								<img className={styles.memeberImg} src="/Rufus.svg" alt="" />
								<a href="https://www.google.com/">
									<img className={styles.linkden} src="/Linkedin.svg" alt="" />
								</a>
							</div>
							<div className={styles.teamInfo}>
								<h4 className={styles.memberName}> Mr Rufus Idowu </h4>
								<p className={styles.memberRole}> General Manager </p>
							</div>
						</div>
						<div className={styles.team}>
							<div className={styles.memeberFrame}>
								<img className={styles.memeberImg} src="/Ann.svg" alt="" />
								<a href="https://www.google.com/">
									<img className={styles.linkden} src="/Linkedin.svg" alt="" />
								</a>
							</div>
							<div className={styles.teamInfo}>
								<h4 className={styles.memberName}> Ann Ohaegbue </h4>
								<p className={styles.memberRole}> Executive Secretary </p>
							</div>
						</div>
						<div className={styles.team}>
							<div className={styles.memeberFrame}>
								<img className={styles.memeberImg} src="/Mark.svg" alt="" />
								<a href="https://www.google.com/">
									<img className={styles.linkden} src="/Linkedin.svg" alt="" />
								</a>
							</div>
							<div className={styles.teamInfo}>
								<h4 className={styles.memberName}> Mark Aliu </h4>
								<p className={styles.memberRole}> Legal Adviser </p>
							</div>
						</div>
						
			
					</div>
				</div>
			</div>












        {/* Chairman Section */}
        {/* <section className={styles.cmcon}>
          <div className={styles.cm}>
            <div className={styles.main}>
              <img src="./chairmanpic.svg" alt="" />
              <div className={styles.cmContent}>
                <h1 className={styles.cmHeader}>From The Chairman</h1>
                <p className={styles.cmText}>
                  While growing up, one of my dreams has been to build a company
                  that offers trust-based services. Thus, further down the
                  years, I developed an interest in the property development
                  business. This interest was primarily due to my family's
                  acquisition of some landed properties in Ajah, Lagos State,
                  Nigeria. Indeed, my family was one of those to own land in the
                  then developing area of Lagos State in the early 1990s.
                </p>
                <div className={styles.cmAnchor} type="button">
                  <a href="/about"> Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

     
      </div>
    </>
  );
}
