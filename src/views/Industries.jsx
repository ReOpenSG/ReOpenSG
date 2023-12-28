import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Char from '@/components/Industries/Char';
import MemoizedProduct from '@/components/Industries/Product';
import Snb from '@/components/Industries/Snb';
import IndustriesData from '@/data/industriesData.js';
import solutionsData from '@/data/solutionsData.json';
import TitleSection from '@/components/Common/TitleSection';
import styles from '@/styles/styles.module.css';

function Industries() {
  const { id } = useParams();
  const industryData = IndustriesData[id];
  const [industryChar, setIndustryChar] = useState(industryData.desc);
  const [industryProducts, setIndustryProducts] = useState({});
  const [refCharHeading, inViewChar] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refProductHeading, inViewProduct] = useInView({ triggerOnce: false, threshold: 0.2 });
  const refs = {
    charSectionRef: useRef(null),
    productSectionRef: useRef(null),
  };

  useEffect(() => {
    const products = industryData.solutions.reduce((acc, item) => {
      acc[item] = solutionsData[item];
      return acc;
    }, {});

    setIndustryProducts(products);
  }, [id, industryData]);

  const title = industryData.name === '배터리' ? '2차 전지' : industryData.name;

  return (
    <div className={styles.industries}>
      <TitleSection
        category="Industries"
        title={title}
        subTitle={id}
        background="bg-[url('@/assets/products_background.png')]"
        textAlign="text-left"
      />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <Snb
            inViewChar={inViewChar}
            alThing
            inViewProduct={inViewProduct}
            refs={{
              charSectionRef: refs.charSectionRef,
              productSectionRef: refs.productSectionRef,
            }}
          />
          <div>
            <Char
              headingRef={refCharHeading}
              sectionRef={refs.charSectionRef}
              currentLocation={id}
              industryDesc={industryChar}
            />
            <MemoizedProduct
              headingRef={refProductHeading}
              sectionRef={refs.productSectionRef}
              currentLocation={id}
              industryProducts={industryProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
