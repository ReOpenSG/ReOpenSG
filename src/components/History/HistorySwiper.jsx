import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Controller, EffectCoverflow, Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from '@/components/History/History.module.css';
import YearSlide from '@/components/History/YearSlide';
import HistorySlide from '@/components/History/HistorySlide';
import historyData from '../../../historyData.json';

function HistorySwiper() {
  // 연도 Swiper 와 카드 Swiper 가 움직일 때 마다 함께 연동되도록 controller 설정을 하기 위한 상태 관리
  const [yearSwiper, setYearSwiper] = useState(null);
  const [historySwiper, setHistorySwiper] = useState(null);

  // 연혁 내림차순으로 정렬
  const historyDataSorted = Object.entries(historyData).toSorted((a, b) => b[0] - a[0]);
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>오픈에스지 연혁</h2>
      <div className={styles.swiperWrapper}>
        <Swiper
          mousewheel
          centeredSlides
          modules={[Controller, EffectCoverflow, Mousewheel]}
          effect="coverflow"
          breakpoints={{
            375: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: true,
          }}
          onSwiper={setYearSwiper}
          controller={{ by: 'container', control: historySwiper }}
          className={styles.yearSwiper}
        >
          {historyDataSorted.map(([key]) => (
            <SwiperSlide className={styles.yearSwiperSlide} key={key}>
              {({ isActive }) => (
                <YearSlide isActive={isActive} year={key} key={key} />
              )}
            </SwiperSlide>
          ))}

        </Swiper>
        <Swiper
          mousewheel
          centeredSlides
          modules={[Controller, EffectCoverflow, Mousewheel]}
          effect="coverflow"
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          coverflowEffect={{
            rotate: 20,
            scale: 0.7,
          }}
          onSwiper={setHistorySwiper}
          controller={{ by: 'container', control: yearSwiper }}
          className={styles.historySwiper}
        >
          {historyDataSorted.map(([key, value]) => (
            <SwiperSlide className={styles.historySwiperSlide} key={key}>
              {({ isActive }) => (
                <HistorySlide isActive={isActive} year={key} history={value} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default HistorySwiper;