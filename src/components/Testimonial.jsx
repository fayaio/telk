import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
import kehide from "../img/kehide.png"

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
const Testimonial = ()  =>
{
  return (
    <div class="App bg-[url('/img/teambg.png')] pb-[40px] opacity-100 ">

<h1 class="text-center text-4xl text-white font-['Montserrat'] ">Testimoial</h1>
<h1 class="text-center text-2xl text-white pb-[20px] font-['Montserrat']">what our customers say about us</h1>
      

      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "500px"  }}
      >
        <SwiperSlide
          style={{
           backgroundColor: "white"
          }}
        >
          
          <div class="flex flex-col items-center justify-center pt-[20px]">
                <div class="w-40 h-40 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src={kehide} alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
          </div>
          <h1 class="text-center text-black pt-[20px] font-['Montserrat']"> Kehinde Oyefeso </h1>
          <p class="text-center text-black pt-[20px] pl-[20px] pr-[20px] font-['Montserrat']">"BJF Propertys greatest strengths versus other solutions Ive used is its simplicity and ease of customization"</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "white"
           }}
        >
          
          <div class="flex flex-col items-center justify-center pt-[20px]">
                <div class="w-40 h-40 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src={kehide} alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
          </div>
          <h1 class="text-center text-black pt-[20px] font-['Montserrat']"> Kehinde Oyefeso </h1>
          <p class="text-center text-black pt-[20px]  pl-[20px] pr-[20px] font-['Montserrat']">"BJF Propertys greatest strengths versus other solutions Ive used is its simplicity and ease of customization"</p>
        </SwiperSlide>
        <SwiperSlide
        
        style={{
          backgroundColor: "white"
         }}
        >
         

          <div class="flex flex-col items-center justify-center pt-[20px]">
                <div class="w-40 h-40 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src={kehide} alt="img"
                        class="object-cover object-center w-full h-full" />
                    
                </div>
          </div>
          <h1 class="text-center text-black pt-[20px] font-['Montserrat']"> Kehinde Oyefeso </h1>
          <p class="text-center text-black pt-[20px] pl-[20px] pr-[20px] font-['Montserrat']">"BJF Propertys greatest strengths versus other solutions Ive used is its simplicity and ease of customization"</p>
        </SwiperSlide>
            
      </Swiper>
    </div>
  );
}

export default Testimonial
