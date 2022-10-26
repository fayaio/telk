import styless from '../comp/sliderone.module.css';
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
        <h3 className={styless.swiperHeader}> Football Meeting</h3>
        <p className={styless.swiperP}>
          Our meeting with the Football coach and former Nigerian Midfielder
          (Maureen MMadu) and her football academy
        </p>

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
              <img src="/fballpic1.svg" alt="BJF football meeting" />
            </SwiperSlide>

            <SwiperSlide className={styless.swiperSlide}>
              <img src="/fballpic2.svg" alt="BJF football meeting" />
            </SwiperSlide>

            <SwiperSlide className={styless.swiperSlide}>
              <img src="/fballpic3.svg" alt="BJF football meeting" />
            </SwiperSlide>

            <SwiperSlide className={styless.swiperSlide}>
              <img src="/fballpic4.svg" alt="BJF football meeting" />
            </SwiperSlide>

            <SwiperSlide className={styless.swiperSlide}>
              <img src="/fballpic5.svg" alt="BJF football meeting" />
            </SwiperSlide>

            <SwiperSlide className={styless.swiperSlide}>
              <img src="/fballpic6.svg" alt="BJF football meeting" />
            </SwiperSlide>

            <SwiperSlide className={styless.swiperSlide}>
              <img src="/fballpic7.svg" alt="BJF football meeting" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
