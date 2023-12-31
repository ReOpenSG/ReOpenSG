import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Controller, EffectCoverflow, Mousewheel, Navigation,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import YearSlide from '@/components/History/YearSlide';
import HistorySlide from '@/components/History/HistorySlide';
import styles from '@/styles/styles.module.css';

function HistorySwiper({ historyData }) {
  // 연도 Swiper 와 카드 Swiper 가 움직일 때 마다 함께 연동되도록 controller 설정을 하기 위한 상태 관리
  const [yearSwiper, setYearSwiper] = useState(null);
  const [historySwiper, setHistorySwiper] = useState(null);

  // 연혁 내림차순으로 정렬
  const historyDataSorted = Object.entries(historyData);

  return (
    <div className={styles.historyWrapper}>
      <section className={styles.historySection}>
        <h2 className={styles.srOnly}>오픈에스지 연혁</h2>
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
            slideToClickedSlide
            initialSlide={historyDataSorted.length - 1}
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
            modules={[Controller, EffectCoverflow, Mousewheel, Navigation]}
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
            slideToClickedSlide
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            initialSlide={historyDataSorted.length - 1}
          >
            {historyDataSorted.map(([key, value]) => (
              <SwiperSlide className={styles.historySwiperSlide} key={key}>
                {({ isActive }) => (
                  <HistorySlide isActive={isActive} year={key} history={value} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <button tabIndex={0} className="swiper-button-prev sr-only">이전</button>
          <button tabIndex={0} className="swiper-button-next sr-only">다음</button>
        </div>
      </section>
    </div>
  );
}

HistorySwiper.propTypes = {
  historyData: PropTypes.object.isRequired,
};

export default HistorySwiper;
