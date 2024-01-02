import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/styles/styles.module.css';
import Solution0 from '@/assets/home_solutions0.png';
import Solution1 from '@/assets/home_solutions1.png';
import Solution2 from '@/assets/home_solutions2.png';
import Solution3 from '@/assets/home_solutions3.png';
import Solution4 from '@/assets/home_solutions4.png';
import Solution5 from '@/assets/home_solutions5.png';
import Solution6 from '@/assets/home_solutions6.png';
import { useTranslation } from 'react-i18next';

const images = {
  Solution0,
  Solution1,
  Solution2,
  Solution3,
  Solution4,
  Solution5,
  Solution6,
};

function Solutions() {
  const { t } = useTranslation();
  const solutionData = JSON.parse(JSON.stringify(t('home:solutions', { returnObjects: true })));
  const solutionArray = Object.values(solutionData);
  const [selectedItem, setSelectedItem] = useState(solutionArray[0]);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    const item = solutionArray.find((v) => v.id === index);
    setAnimate(false);

    setSelectedItem(item);
    setTimeout(() => setAnimate(true), 5);
  };

  const handleMore = () => {
    navigate(`${selectedItem.route}`);
  };

  return (
    <section className={styles.solutions} data-aos="fade-up">
      <div className="flex w-full justify-between">
        <h3 className={styles.title}>Open Solutions</h3>
        <ul className={styles.ul}>
          {solutionArray.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                id="trigger"
                onClick={() => handleItemClick(item.id)}
                className={`${styles.button} ${
                  selectedItem.id === item.id
                    ? '-bg--open-accent-accent after:translate-x-0'
                    : 'after:absolute after:left-0 after:top-0 after:h-full after:w-full after:-translate-x-full after:rounded-3xl after:content-none'
                }`}
              >
                {t(`home:solutions.${item.id}.name`)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.description}>
          <h4 className={`${styles.title}`}>{t(`home:solutions.${selectedItem.id}.title`)}</h4>
          <p className={`${styles.summary}`}>{t(`home:solutions.${selectedItem.id}.desc`)}</p>

          {selectedItem.id !== 0 && (
            <button type="button" className={`${styles.more}`} onClick={handleMore}>
              Learn More &gt;
            </button>
          )}
        </div>

        <div className="mx-auto w-full overflow-visible">
          <img
            className={`${styles.image} ${animate ? 'animate-bounceFade' : ''}`}
            alt={selectedItem.name}
            src={images[selectedItem.img]}
          />
        </div>
      </div>
    </section>
  );
}

export default Solutions;
