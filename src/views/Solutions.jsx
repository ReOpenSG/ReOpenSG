import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Data from '@/data/solutionsData.json';
import TitleSection from '@/components/Common/TitleSection';
import Lnb from '@/components/Solutions/Lnb';
import SoultionBanner from '@/components/Solutions/SoultionBanner';
import Snb from '@/components/Solutions/Snb';
import MeoizedChar from '@/components/Solutions/Char';
import MemoizedFunc from '@/components/Solutions/Func';
import MemoizedEffect from '@/components/Solutions/Effect';
import styles from '@/styles/styles.module.css';

function Solutions() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const serctionRefs = {
    charRef: useRef(null),
    funcRef: useRef(null),
    effectRef: useRef(null),
  };
  const [refCharHeading, inViewChar] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [refFuncHeading, inViewFunc] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [refEffectHeading, inViewEffect] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  const LnbData = {
    array: data.map((item) => item[0]),
    prev: Data[id].솔루션,
  };

  useEffect(() => {
    const filteredData = Object.entries(Data).filter(
      (item) => item[1].솔루션.trim() === Data[id].솔루션.trim(),
    );
    setData(filteredData);
  }, [id]);

  return (
    <div className={styles.solutions}>
      <TitleSection
        category="Open Solution"
        title="설계부터"
        subTitle="시뮬레이션까지"
        background="bg-[url('@/assets/products_background.png')]"
        textAlign="text-left"
      />
      <section className={styles.solutionsOuterContainer}>
        {LnbData.array && LnbData.array.length > 1 && <Lnb LnbArray={LnbData.array} />}
        <SoultionBanner currentLocation={id} prevLocation={LnbData.prev} />
        <div className={styles.solutionsInnerContainer}>
          <Snb
            inViewChar={inViewChar}
            inViewFunc={inViewFunc}
            inViewEffect={inViewEffect}
            refs={{
              charSectionRef: serctionRefs.charRef,
              funcSectionRef: serctionRefs.funcRef,
              effectSectionRef: serctionRefs.effectRef,
            }}
          />
          <div>
            <MeoizedChar
              headingRef={refCharHeading}
              currentLocation={id}
              data={Data}
              sectionRef={serctionRefs.charRef}
            />
            <MemoizedFunc
              headingRef={refFuncHeading}
              currentLocation={id}
              data={Data}
              sectionRef={serctionRefs.funcRef}
            />
            <MemoizedEffect
              headingRef={refEffectHeading}
              currentLocation={id}
              data={Data}
              sectionRef={serctionRefs.effectRef}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
