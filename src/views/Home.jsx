import React, { useEffect } from 'react';
import AOS from 'aos';
import Slogan from '@/components/Home/Slogan';
import Universe from '@/components/Home/Universe';
import Solutions from '@/components/Home/Solutions';
import Products from '@/components/Home/Products';
import Industries from '@/components/Home/Industries';
import Partner from '@/components/Home/Partner';
import styles from '@/components/Home/Home.module.css';
import 'aos/dist/aos.css';

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
  return (
    <section className={styles.home}>
      <h2 className="sr-only">메인 페이지</h2>
      <div className="-bg--openfoundation-black w-full h-full">
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
