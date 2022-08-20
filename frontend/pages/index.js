import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
  Thumbs,
} from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
            <li>
              <div href="" className={styles.card}>
                <img src="./cofo.svg" alt="" className={styles.card__image} />
                <div className={styles.card__overlay}>
                  <div className={styles.card__header}>
                    <svg
                      className={styles.card__arc}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      src="/bjflog.svg"
                      alt=""
                      className={styles.card__thumb}
                    />

                    <div className={styles.card__headertext}>
                      <h3 className={styles.card__title}>C Of O Factory</h3>
                      <span className={styles.card__status}> Factory</span>
                    </div>
                  </div>

                  <a className={styles.moredetails} href="/">
                    {' '}
                    More Details
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div href="" className={styles.card}>
                <img
                  src="./cofoEstate.svg"
                  alt=""
                  className={styles.card__image}
                />
                <div className={styles.card__overlay}>
                  <div className={styles.card__header}>
                    <svg
                      className={styles.card__arc}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      src="/bjflog.svg"
                      alt=""
                      className={styles.card__thumb}
                    />

                    <div className={styles.card__headertext}>
                      <h3 className={styles.card__title}>C Of O Mini Estate</h3>
                      <span className={styles.card__status}> Estate</span>
                    </div>
                  </div>

                  <a className={styles.moredetails} href="/">
                    {' '}
                    More Details
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div href="" className={styles.card}>
                <img
                  src="./waterproduction.svg"
                  alt=""
                  className={styles.card__image}
                />
                <div className={styles.card__overlay}>
                  <div className={styles.card__header}>
                    <svg
                      className={styles.card__arc}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      src="/bjflog.svg"
                      alt=""
                      className={styles.card__thumb}
                    />

                    <div className={styles.card__headertext}>
                      <h3 className={styles.card__title}>
                        Water Production Hall
                      </h3>
                      <span className={styles.card__status}> Factory</span>
                    </div>
                  </div>

                  <a className={styles.moredetails} href="/">
                    {' '}
                    More Details
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Who We Are */}
        <div className={styles.explore}>
          <h3 className={styles.exploreheader}>Who We Are</h3>
          <ul className={styles.cardss}>
            <li className={styles.cards_item}>
              <div className={styles.cardd}>
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
              <div className={styles.cardd}>
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
              <div className={styles.cardd}>
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

        <div className={styles.slidesSection}>
          <h3 className={styles.slidesHeader}>3D Hotel Proposed Development</h3>

          <Swiper
            style={{
              '--swiper-navigation-color': '#efefef',
              '--swiper-pagination-color': '#efefef',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.myhotelSwiper2}
          >
            <SwiperSlide>
              <img src="/hotel1.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel2.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel3.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel4.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel5.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel6.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel7.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel8.svg" />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={90}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.myhotelSwiper}
          >
            <SwiperSlide>
              <img src="/hotel1.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel2.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel3.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel4.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel5.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel6.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel7.svg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/hotel8.svg" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <h3 className={styles.teamHeader}>Meet The Team</h3>
          <hr style={{ borderColor: '#00325a', width: '10%' }}></hr>

          <div className={styles.cmProfile}>
            <div className={styles.cm}>
              <div className={styles.cmImg}>
                <img src="/chairmanpic.svg" />
              </div>
              <div className={styles.cminfo}>
                <h5 className={styles.cminfoHeader}>From The Chairman</h5>
                <h6 className={styles.cmName}> Samuel Jegede </h6>
                <p className={styles.cmSpeech}>
                  While growing up, one of my dreams has been to build a company
                  that offers trust-based services. Thus, further down the
                  years, I developed an interest in the property development
                  business.
                </p>
                <div className={styles.btnContainer}>
                  <a className={styles.profileBtn} href="/about">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.teamContainer}>
            <div className={styles.profile}>
              <div className={styles.ourTeam}>
                <div className={styles.teamPics}>
                  <div className={styles.frame}>
                    <Image src="/Rufus.svg" width={130} height={130} />
                  </div>
                </div>

                <h5 className={styles.teamNames}>Mr Rufus Idoun</h5>
                <h6 className={styles.teamroles}>General Manager</h6>

                <div className={styles.btnContainer}>
                  <a className={styles.profileBtn} href="/about">
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.profile}>
              <div className={styles.ourTeam}>
                <div className={styles.teamPics}>
                  <div className={styles.frame}>
                    <Image src="/Ann.svg" width={130} height={130} />
                  </div>
                </div>

                <h5 className={styles.teamNames}>Ann Ohaegbue</h5>
                <h6 className={styles.teamroles}>Executive Secretary</h6>

                <div className={styles.btnContainer}>
                  <a className={styles.profileBtn} href="/about">
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.profile}>
              <div className={styles.ourTeam}>
                <div className={styles.teamPics}>
                  <div className={styles.frame}>
                    <Image src="/Mark.svg" width={130} height={130} />
                  </div>
                </div>

                <h5 className={styles.teamNames}>Mark Aliu</h5>
                <h6 className={styles.teamroles}>Legal Adviser</h6>

                <div className={styles.btnContainer}>
                  <a className={styles.profileBtn} href="/about">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*       
      Testimonials Section */}

        <div className={styles.swiper}>
          <h3 className={styles.swiperHeader}>Testimonials</h3>
          <p className={styles.swiperP}>What Our Clients Say</p>

          <Swiper
            className={styles.mySwiper}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            navigation={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            <div className={styles.swiperWrapper}>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.testibox}>
                  <div className={styles.testiprofile}>
                    <img src="https://www.seekpng.com/png/detail/72-729756_how-to-add-a-new-user-to-your.png" />
                    <div className={styles.information}>
                      <p className={styles.testfiers}>CEO Comet Networks</p>
                      <span>Atlanta Georgia (USA)</span>
                    </div>
                  </div>
                  <div className={styles.testContent}>
                    <p className={styles.testP}>
                      We contacted BJF ppty and development ltd after we
                      acquired an old property for our new location in Lagos.
                      BJF did an excellent job, they outperformed our
                      expectations in every aspect. Their personnel are very
                      pleasant to deal with. I will definitely think of them
                      first whenever we have a property development project.
                    </p>
                    <FontAwesomeIcon
                      className={styles.iconquote}
                      icon={faQuoteRight}
                      width={30}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.testibox}>
                  <div className={styles.testiprofile}>
                    <img src="https://www.seekpng.com/png/detail/72-729756_how-to-add-a-new-user-to-your.png" />
                    <div className={styles.information}>
                      <p className={styles.testfiers}>E. Awolumate</p>
                      <span>(Prof, USA)</span>
                    </div>
                  </div>
                  <div className={styles.testContent}>
                    <p className={styles.testP}>
                      As one of the beneficiaries of this great corporate
                      organization, I will highly recommend them to giving you
                      first class structure that will be comparable to any
                      building in the world. This is solely based on their
                      reliability, architectural designs, prompt responses to
                      keep you abreast of your property, payment plan and their
                      flexibility to work with you to accommodate your needs.
                      They are here to giving you what you need especially if
                      you reside abroad.
                    </p>
                    <FontAwesomeIcon
                      className={styles.iconquote}
                      icon={faQuoteRight}
                      width={30}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
