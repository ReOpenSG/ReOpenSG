import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import Image2 from '@/assets/home_industry1.png';
import Image1 from '@/assets/home_industry4.png';
import Image3 from '@/assets/home_industry2.png';
import Image4 from '@/assets/home_industry3.png';
import styles from '@/styles/styles.module.css';
import { t } from 'i18next';
import { useRecoilValue } from 'recoil';
import { languageState } from '@/recoil/atoms/languageStore';

function Industries() {
  const language = useRecoilValue(languageState);
  const industryData = [
    {
      id: uuid(),
      img: Image4,
      enTitle: 'Semi-conductor',
      krTitle: '반도체',
      route: 'semiconductor',
    },

    {
      id: uuid(),
      img: Image2,
      enTitle: 'Display',
      krTitle: '디스플레이',
      route: 'display',
    },
    {
      id: uuid(),
      img: Image1,
      enTitle: 'Secondary Battery',
      krTitle: '2차 전지',
      route: 'battery',
    },
    {
      id: uuid(),
      img: Image3,
      enTitle: 'Port',
      krTitle: '항만',
      route: 'port',
    },
  ];
  return (
    <section className={styles.industry} data-aos="fade-up">
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Industries</h3>
        <div className="flex flex-col  gap-open-lg">
          <p className={styles.mainKeyword} data-aos="fade-up">
            {t('home:industries.mainKeyword')}&nbsp;
            <span className={styles.gradient}>OpenSG</span>
          </p>
          <small className={styles.subKeyword} data-aos="fade-up" data-aos-delay="150">
            {t('home:industries.subKeyword')}
          </small>
        </div>
      </div>

      <div className={styles.industriesContainer}>
        <div className={styles.cardWrapper}>
          {industryData.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url('${item.img}')` }}
              data-aos="zoom-out"
              data-aos-duration="700"
              data-aos-delay="50"
            >
              <Link to={`/industries/${item.route}`} className="block h-full p-open-2xl ">
                {language === 'KOR' && <p className={styles.krTitle}>{item.krTitle}</p>}
                <p className={styles.enTitle}>{item.enTitle}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
