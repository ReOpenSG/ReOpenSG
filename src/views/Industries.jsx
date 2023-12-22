import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setIndustryChar(IndustriesData[id].desc);

    IndustriesData[id].solutions.map((item) =>
      setIndustryProducts((prev) => ({
        ...prev,
        [item]: solutionsData[item],
      })),
    );
  }, [id]);

  const [refChar, inViewChar] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refProduct, inViewProduct] = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <div className="w-full">
      <TitleSection
        category="Industries"
        title={IndustriesData[id].name === '배터리' ? '2차 전지' : IndustriesData[id].name}
        subTitle={id}
        background="bg-[url('@/assets/products_background.svg')]"
        textAlign="text-left"
      />
      <section className="max-w-[1320px] desktop:pb-open-5xl tablet:pb-open-5xl pb-open-2xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile">
        <h2 className="sr-only">산업군별 페이지</h2>
        <div className="flex desktop:gap-open-4xl tablet:gap-open-4xl">
          <Snb inViewChar={inViewChar} inViewProduct={inViewProduct} />
          <div className="flex-1">
            <Char refs={refChar} currentLocation={id} industryDesc={industryChar} />
            <Product refs={refProduct} currentLocation={id} industryProducts={industryProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;
