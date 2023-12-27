import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Char from '@/components/Industries/Char';
import Product from '@/components/Industries/Product';
import Snb from '@/components/Industries/Snb';
import IndustriesData from '@/data/industriesData.js';
import solutionsData from '@/data/solutionsData.json';
import TitleSection from '@/components/Common/TitleSection';

function Industries() {
  const { id } = useParams();
  const [industryChar, setIndustryChar] = useState('');
  const [industryProducts, setIndustryProducts] = useState({});
  const [refCharHeading, inViewChar] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refProductHeading, inViewProduct] = useInView({ triggerOnce: false, threshold: 0.1 });
  const refs = {
    charSectionRef: useRef(null),
    productSectionRef: useRef(null),
  };

  useEffect(() => {
    setIndustryChar(IndustriesData[id].desc);

    IndustriesData[id].solutions.map((item) =>
      setIndustryProducts((prev) => ({
        ...prev,
        [item]: solutionsData[item],
      })),
    );
  }, [id]);

  return (
    <div className="w-full">
      <TitleSection
        category="Industries"
        title={IndustriesData[id].name === '배터리' ? '2차 전지' : IndustriesData[id].name}
        subTitle={id}
        background="bg-[url('@/assets/products_background.png')]"
        textAlign="text-left"
      />
      <section className="flex flex-col items-center desktop:pb-open-5xl tablet:pb-open-5xl pb-open-2xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile">
        <h3 className="sr-only">{IndustriesData[id].name}</h3>
        <div className="flex max-w-[1320px] desktop:gap-open-4xl tablet:gap-open-4xl">
          <Snb
            inViewChar={inViewChar}
            alThing
            inViewProduct={inViewProduct}
            refs={{
              charSectionRef: refs.charSectionRef,
              productSectionRef: refs.productSectionRef,
            }}
          />
          <div className="flex-1">
            <Char
              headingRef={refCharHeading}
              sectionRef={refs.charSectionRef}
              currentLocation={id}
              industryDesc={industryChar}
            />
            <Product
              headingRef={refProductHeading}
              sectionRef={refs.productSectionRef}
              currentLocation={id}
              industryProducts={industryProducts}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;
