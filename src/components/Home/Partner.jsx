import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { v4 as uuid } from 'uuid';
import { Autoplay } from 'swiper/modules';
import Image1 from '@/assets/home_partner1.png';
import Image2 from '@/assets/home_partner2.png';
import Image3 from '@/assets/home_partner3.png';
import Image4 from '@/assets/home_partner4.png';
import Image5 from '@/assets/home_partner5.png';

import styles from './Home.module.css';

function Partner() {
  const partnerData = [
    {
      id: uuid(),

      img: Image1,
    },

    {
      id: uuid(),

      img: Image2,
    },

    {
      id: uuid(),

      img: Image3,
    },

    {
      id: uuid(),

      img: Image4,
    },

    {
      id: uuid(),

      img: Image5,
    },

    {
      id: uuid(),

      img: Image1,
    },

    {
      id: uuid(),

      img: Image2,
    },

    {
      id: uuid(),

      img: Image3,
    },

    {
      id: uuid(),

      img: Image4,
    },

    {
      id: uuid(),

      img: Image5,
    },
  ];

  return (
    <section className={styles.partner}>
      <h3 className="sr-only">Partner</h3>

      <div className={styles.titleWrapper}>
        <p className={styles.mainKeyword} data-aos="fade-up">
          <span>최고 기업들이 선택한&nbsp;</span>
          <span className={styles.gradient}>OpenSG</span>
        </p>

        <small className={styles.subKeyword} data-aos="fade-up" data-aos-delay="100">
          <span>최정상 기업들과 함께한 경험으로,</span>

          <span>고객사가 찾는 최적의 솔루션을 제공합니다</span>
        </small>
      </div>

      <div className="w-full">
        <Swiper
          className={`mySwiper ${styles.partnerSwiper}`}
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            375: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },

            1440: {
              slidesPerView: 6,
            },
          }}
          loop
          modules={[Autoplay]}
          speed={5500}
          freeMode
          preventInteractionOnTransition
          autoplay={{
            delay: 0,

            stopOnLastSlide: false,

            disableOnInteraction: false,
          }}
        >
          {partnerData.map((item) => (
            <SwiperSlide key={item.id} className="w-[300px]">
              <img src={item.img} alt="partner" className="w-[240px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partner;
