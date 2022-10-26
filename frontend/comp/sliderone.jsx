import styless from '../styles/Home.module.css';
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

export default function sliderone() {
  return (
    <>
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
}
