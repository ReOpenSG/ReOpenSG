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
import Image6 from '@/assets/home_partner6.png';
import Image7 from '@/assets/home_partner7.png';
import Image8 from '@/assets/home_partner8.png';

import styles from '@/styles/styles.module.css';
import { t } from 'i18next';

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

      img: Image6,
    },

    {
      id: uuid(),

      img: Image7,
    },

    {
      id: uuid(),

      img: Image8,
    },
  ];

  return (
    <section className={styles.partner}>
      <h3 className="sr-only">Partner</h3>

      <div className={styles.titleWrapper}>
        <p className={styles.mainKeyword} data-aos="fade-up">
          <span>{t('home:partner.mainKeyword')}&nbsp;</span>
          <span className={styles.gradient}>OpenSG</span>
        </p>

        <small className={styles.subKeyword} data-aos="fade-up" data-aos-delay="150">
          <span>{t('home:partner.subKeyword.0')}</span>

          <span>{t('home:partner.subKeyword.1')}</span>
        </small>
      </div>

      <div className="w-full">
        <Swiper
          className={`mySwiper ${styles.partnerSwiper}`}
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            375: {
              slidesPerView: 5,
            },

            1024: {
              slidesPerView: 6,
            },

            1440: {
              slidesPerView: 6.5,
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
            <SwiperSlide key={item.id} className="w-[240px] tablet:w-[300px] desktop:w-[300px]">
              <img
                src={item.img}
                alt="partner"
                className="desktop:w-[240px]object-cover w-[150px] tablet:w-[240px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partner;
