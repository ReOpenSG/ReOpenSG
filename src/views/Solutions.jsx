import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Data from '@/data/solutionsData.json';
import Lnb from '@/components/Solutions/Lnb';
import SoultionBanner from '@/components/Solutions/SoultionBanner';
import MeoizedChar from '@/components/Solutions/Char';
import Snb from '@/components/Solutions/Snb';
import Func from '@/components/Solutions/Func';
import Effect from '@/components/Solutions/Effect';
import TitleSection from '@/components/Common/TitleSection';

function Solutions() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const LnbData = {
    array: data.map((item) => item[0]),
    current: id,
    prev: Data[id].솔루션,
  };
  const refs = {
    charSectionRef: useRef(null),
    funcSectionRef: useRef(null),
    effectSectionRef: useRef(null),
  };
  const [refCharHeading, inViewChar] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [refFuncHeading, inViewFunc] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [refEffectHeading, inViewEffect] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    const filteredData = Object.entries(Data).filter(
      (item) => item[1].솔루션.trim() === Data[id].솔루션.trim(),
    );
    setData(filteredData);
  }, [id]);

  return (
    <div className="w-full">
      <TitleSection
        category="Open Solution"
        title="설계부터"
        subTitle="시뮬레이션까지"
        background="bg-[url('@/assets/products_background.png')]"
        textAlign="text-left"
      />
      <section className="mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile">
        <Lnb LnbArray={LnbData.array} />
        <SoultionBanner currentLocation={LnbData.current} prevLocation={LnbData.prev} />
        <div className="flex justify-center">
          <div className="w-full max-w-[1320px] flex desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop">
            <Snb
              inViewChar={inViewChar}
              inViewFunc={inViewFunc}
              inViewEffect={inViewEffect}
              refs={{
                charSectionRef: refs.charSectionRef,
                funcSectionRef: refs.funcSectionRef,
                effectSectionRef: refs.effectSectionRef,
              }}
            />
            <div className="flex flex-col">
              <MeoizedChar
                headingRef={refCharHeading}
                currentLocation={LnbData.current}
                data={Data}
                sectionRef={refs.charSectionRef}
              />
              <Func
                headingRef={refFuncHeading}
                currentLocation={LnbData.current}
                data={Data}
                sectionRef={refs.funcSectionRef}
              />
              <Effect
                headingRef={refEffectHeading}
                currentLocation={LnbData.current}
                data={Data}
                sectionRef={refs.effectSectionRef}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
