import React, { useEffect } from 'react';
import AOS from 'aos';
import Slogan from '@/components/Home/Slogan';
import Universe from '@/components/Home/Universe';
import Solutions from '@/components/Home/Solutions';
import Products from '@/components/Home/Products';
import Industries from '@/components/Home/Industries';
import Partner from '@/components/Home/Partner';
import styles from '@/styles/styles.module.css';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function Home() {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      debounceDelay: 50,
      throttleDelay: 99,
      delay: 50,
      duration: 1000,
    });
  }, []);
  const { t } = useTranslation();

  return (
    <section className={styles.home}>
      <h2 className="sr-only">메인 페이지</h2>
      <div className="h-full w-full -bg--openfoundation-black">
        <Slogan />
      </div>
      <Universe />
      <div className={styles.black}>
        <Solutions />
        <Products />
      </div>
      <div className={styles.white}>
        <Industries />
        <Partner />
      </div>
    </section>
  );
}

export default Home;
