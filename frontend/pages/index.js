import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination,Navigation } from "swiper";
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
          <h3 className={styles.exploreheader}>
            Explore Properties In Nigeria
          </h3>
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

        <div className={styles.swiper}>
        <h3 className={styles.swiperHeader}>Testimonials</h3>
          <p className={styles.swiperP}>What Our Clients Say About Us !</p>


          <Swiper
            className={styles.mySwiper}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            navigation={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            <div className={styles.swiperWrapper}>


            <SwiperSlide className={styles.swiperSlide  }>
              <div className={styles.testibox}>
                <img className={styles.quoteimg} src="/quote.svg" alt=""  width={50}/>
                <div className={styles.testContent}>
                  <p className={styles.testP}>
                  We contacted BJF ppty and development ltd after we acquired an old property for our new location in Lagos.
                BJF did an excellent job, they outperformed our expectations in every aspect.
                Their personnel are very pleasant to deal with. I will definitely think of them first whenever we have a property development project.
                  </p>
                  
                    <h3 className={styles.testfiers}>  CEO Comet Networks Atlanta Georgia (USA) </h3>
                  
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testibox}>
  
                <img className={styles.quoteimg} src="/quote.svg" alt=""  width={50}/>
             
                <div className={styles.testContent}>
                  <p className={styles.testP}>
                  As one of the beneficiaries of this great corporate organization,
                I will highly recommend them to giving you first class structure that will be comparable to any building in the world.
                This is solely based on their reliability, architectural designs, prompt responses to keep you abreast of your property,
                payment plan and their flexibility to work with you to accommodate your needs.
                They are here to giving you what you need especially if you reside abroad.
                  </p>
                 
                    <h3 className={styles.testfiers}>   E. Awolumate (Prof, USA) </h3>
                
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide  }>
              <div className={styles.testibox}>
                <img className={styles.quoteimg} src="/quote.svg" alt=""  width={50}/>
                <div className={styles.testContent}>
                  <p className={styles.testP}>
                  We contacted BJF ppty and development ltd after we acquired an old property for our new location in Lagos.
                BJF did an excellent job, they outperformed our expectations in every aspect.
                Their personnel are very pleasant to deal with. I will definitely think of them first whenever we have a property development project.
                  </p>
                  
                    <h3 className={styles.testfiers}>  CEO Comet Networks Atlanta Georgia (USA) </h3>
                  
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testibox}>
  
                <img className={styles.quoteimg} src="/quote.svg" alt=""  width={50}/>
             
                <div className={styles.testContent}>
                  <p className={styles.testP}>
                  As one of the beneficiaries of this great corporate organization,
                I will highly recommend them to giving you first class structure that will be comparable to any building in the world.
                This is solely based on their reliability, architectural designs, prompt responses to keep you abreast of your property,
                payment plan and their flexibility to work with you to accommodate your needs.
                They are here to giving you what you need especially if you reside abroad.
                  </p>
                 
                    <h3 className={styles.testfiers}>   E. Awolumate (Prof, USA) </h3>
                
                </div>
              </div>
            </SwiperSlide>



              

             
            </div>
          </Swiper>
        </div>





       

       

        <div className={styles.cmsection}>
        <h3 className={styles.teamHeader}> Meet The Team </h3>
          <div className={styles.cm}>
            <div className={styles.cmimage}>
              <img
                src="./chairmanpic.svg"
                alt=""
                width={300}
                height={390}
                priority
              />
            </div>
            <div className={styles.cmContent}>
            <h2 className={styles.cmHeader}>From The Chairman</h2>
            <p className={styles.cmName}> Samuel Jegede</p>
              <p className={styles.cmText}>
                While growing up, one of my dreams has been to build a company
                that offers trust-based services. Thus, further down the years,
                I developed an interest in the property development business.
                This interest was primarily due to my family's acquisition of
                some landed properties in Ajah, Lagos State, Nigeria.
              </p>
              <a className={styles.cmAnchor} href="/about">
                
                Read More
              </a>
            </div>
          </div>
        </div>

       




        {/* Team Section */}
        <div className={styles.teamSection}>
          <div className={styles.teamContainer}>
            <div className={styles.allTeams}>
              <div className={styles.team}>
                <div className={styles.memeberFrame}>
                  <img
                    className={styles.memeberImg}
                    src="/Rufus.svg"
                    alt=""
                    priority
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.memberName}> Mr Rufus Idowu </h4>
                  <p className={styles.memberRole}> General Manager </p>
                </div>
              </div>
              <div className={styles.team}>
                <div className={styles.memeberFrame}>
                  <img
                    className={styles.memeberImg}
                    src="/Ann.svg"
                    alt=""
                    priority
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.memberName}> Ann Ohaegbue </h4>
                  <p className={styles.memberRole}> Executive Secretary </p>
                </div>
              </div>
              <div className={styles.team}>
                <div className={styles.memeberFrame}>
                  <img
                    className={styles.memeberImg}
                    src="/Mark.svg"
                    alt=""
                    priority
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.memberName}> Mark Aliu </h4>
                  <p className={styles.memberRole}> Legal Adviser </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className={styles.testimonials}> */}
       
       
        {/* </div> */}
      </div>
    </>
  );
}
