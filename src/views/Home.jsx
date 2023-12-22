import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slogan from '@/components/Home/Slogan';
import Universe from '@/components/Home/Universe';
import Solutions from '@/components/Home/Solutions';
import Products from '@/components/Home/Products';
import Industries from '@/components/Home/Industries';
import Partner from '@/components/Home/Partner';
import styles from '@/components/Home/Home.module.css';

function Home() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Open Solutions, Open SG" />
        <meta property="twitter:title" content="Open Solutions, Open SG" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reopensg.github.io/ReOpenSG/" />
        <meta
          property="og:description"
          content="고객에게 열려있는 기업, 고객의 미래를 여는 기업 OpenSG가 고객과 함께 미래로 가는 길을 엽니다"
        />
        <meta
          property="og:image"
          content="https://reopensg.github.io/ReOpenSG/assets/home_solutions0-CEXbhtJn.png"
        />
        <meta property="og:article:author" content="(주)오픈에스지" />
      </Helmet>
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
    </>
  );
}

export default Home;
