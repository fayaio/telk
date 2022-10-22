import Head from 'next/head';
import styles from './about.module.css';
import styless from '../../styles/Home.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
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
const About = () => {
  return (
    <>
      <Head>
        <title>BJF Properties | About</title>
      </Head>

      <div className={styles.abtBanner}>
        <h2 className={styles.bannerHeader}>ABOUT US</h2>
        <p className={styles.bannersubH}> Who We Are And What We Do </p>
      </div>

      <div className={styles.cmContainer}>
        <div className={styles.cmm}>
          <h3 className={styles.cminfoHeader}> Chairman's Speech</h3>
          <hr style={{ borderColor: '#00325a', width: '10%' }}></hr>

          <div className={styles.cmProfile}>
            <div className={styles.cm}>
              <div className={styles.cmImg}>
                <img
                  src="/chairmanpic.svg"
                  alt="chairman samuel jegede's image"
                />
              </div>
              <div className={styles.cminfo}>
                <p className={styles.cmSpeech}>
                  While growing up, one of my dreams has been to build a company
                  that offers trust-based services. Thus, further down the
                  years, I developed an interest in the property development
                  business. This interest was primarily due to my family&#39;s
                  acquisition of some landed properties in Ajah, Lagos State,
                  Nigeria. Indeed, my family was one of those to own land in the
                  then developing area of Lagos State in the early 1990s.
                  However, my interest in Nigeria&#39;s property business
                  nose-dived after my family lost the land due to ownership
                  conflicts. This ugly experience made me sceptical about
                  further involvement in the murky waters of property business
                  in Nigeria. Notwithstanding, in the year 2019, I had a renewed
                  realization that only the involvement of visionary and
                  virtuous entrepreneurs could sanitize the property development
                  industry in Nigeria. This resolve led to the birth of
                  bjfpropertiesltd. My participation in the industry is to
                  deliver excellent and trust-based services that can be relied
                  upon by Nigerians in diasporas and foreign nationals. We
                  currently have clients from Europe and other parts of the
                  world. Our dream is to keep growing the Client&#39;s base and
                  carve a niche for ourselves in the industry. With our team of
                  dedicated and accountable professionals, we are your go-to
                  company for property development and management in Nigeria.
                  <p className={styles.sndp}>
                    You are welcome to give us a call today!
                  </p>
                  <h6 className={styles.cmName}> Samuel Jegede </h6>
                </p>
                <div className={styles.btnContainer}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teamContainer}>
        <div className={styles.profile}>
          <div className={styles.ourTeam}>
            <div className={styles.teamPics}>
              <div className={styles.frame}>
                <Image
                  src="/Rufus.svg"
                  width={130}
                  height={130}
                  alt="general manager, mr rufus idoun's image"
                />
              </div>
            </div>

            <h5 className={styles.teamNames}>Mr Rufus Idoun</h5>
            <h6 className={styles.teamroles}>General Manager</h6>

            <div className={styles.teamContent}>
              <p className={styles.mbrDescription}>
                Rufus Idoun started his career with Sungflag Nigeria Ltd in
                1990. He went further by working with Shongai in 1993 -2006 and
                has since then been involved in a multitude of development and
                property management activities, including operations, financial
                analysis and acquisitions.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.ourTeam}>
            <div className={styles.teamPics}>
              <div className={styles.frame}>
                <Image
                  src="/Ann.svg"
                  width={130}
                  height={130}
                  alt="executive secretary, ann ohaegbue's image"
                />
              </div>
            </div>

            <h5 className={styles.teamNames}>Ann Ohaegbue</h5>
            <h6 className={styles.teamroles}>Executive Secretary</h6>

            <div className={styles.teamContent}>
              <p className={styles.mbrDescription}>
                Ann is an open-minded, dedicated and Client-focused secretarial
                professional with vast knowledge and memorable experience in
                office administrative procedures. A graduate from the University
                of Lagos with a B.Sc. in Business Administration, she has
                rendered her administrative expertise with notable Law Firms
                like Chuma Anosike & Co., Ayo Adesola and Associates and Ladi
                Ajose-Adeogun & Co. over the years.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.ourTeam}>
            <div className={styles.teamPics}>
              <div className={styles.frame}>
                <Image
                  src="/Mark.svg"
                  width={130}
                  height={130}
                  alt="legal adviser, mark aliu's image"
                />
              </div>
            </div>

            <h5 className={styles.teamNames}>Mark Aliu</h5>
            <h6 className={styles.teamroles}>Legal Adviser</h6>

            <div className={styles.teamContent}>
              <p className={styles.mbrDescription}>
                Mark Aliu graduated from the University of Benin in 2008 with
                honors in Law and was admitted to the Nigerian bar as a
                Barrister and Solicitor of the Supreme Court of Nigeria in
                2009.In 2015, he obtained a Masters at Law (LL.M) from The
                University of Lagos, Akoka, Lagos State. He has extensive
                experience in procedural and substantive law practice. His areas
                of specialization also include Commercial Law, Oil and Gas
                (Petroleum) Law, land law and legal documentation and perfection
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styless.cert}>
        <h3 className={styless.certHeader}> We Are Certified </h3>
        <div className={styless.certimg}>
          <Image
            src="/certificate.svg"
            alt="BJF certificate Of incorporation image"
            width={600}
            height={600}
          />
        </div>
      </div>

      {/*       
      Testimonials Section */}

      <div className={styless.swiper}>
        <h3 className={styless.swiperHeader}>Testimonials</h3>
        <p className={styless.swiperP}>What Our Clients Say</p>

        <Swiper
          className={styless.mySwiper}
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
          <div className={styless.swiperWrapper}>
            <SwiperSlide className={styless.swiperSlide}>
              <div className={styless.testibox}>
                <div className={styless.testiprofile}>
                  <img
                    src="https://www.seekpng.com/png/detail/72-729756_how-to-add-a-new-user-to-your.png"
                    alt="user icon image"
                  />
                  <div className={styless.information}>
                    <p className={styless.testfiers}>CEO Comet Networks</p>
                    <span>Atlanta Georgia (USA)</span>
                  </div>
                </div>
                <div className={styless.testContent}>
                  <p className={styless.testP}>
                    We contacted BJF ppty and development ltd after we acquired
                    an old property for our new location in Lagos. BJF did an
                    excellent job, they outperformed our expectations in every
                    aspect. Their personnel are very pleasant to deal with. I
                    will definitely think of them first whenever we have a
                    property development project.
                  </p>
                  <FontAwesomeIcon
                    className={styless.iconquote}
                    icon={faQuoteRight}
                    width={30}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styless.swiperSlide}>
              <div className={styless.testibox}>
                <div className={styless.testiprofile}>
                  <img
                    src="https://www.seekpng.com/png/detail/72-729756_how-to-add-a-new-user-to-your.png"
                    alt="user icon image"
                  />
                  <div className={styless.information}>
                    <p className={styless.testfiers}>E. Awolumate</p>
                    <span>(Prof, USA)</span>
                  </div>
                </div>
                <div className={styless.testContent}>
                  <p className={styless.testP}>
                    As one of the beneficiaries of this great corporate
                    organization, I will highly recommend them to giving you
                    first class structure that will be comparable to any
                    building in the world. This is solely based on their
                    reliability, architectural designs, prompt responses to keep
                    you abreast of your property, payment plan and their
                    flexibility to work with you to accommodate your needs. They
                    are here to giving you what you need especially if you
                    reside abroad.
                  </p>
                  <FontAwesomeIcon
                    className={styless.iconquote}
                    icon={faQuoteRight}
                    width={30}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default About;
