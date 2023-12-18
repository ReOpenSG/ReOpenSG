import React, { useState } from 'react';
import Solution0 from '@/assets/home_solutions0.png';
import Solution1 from '@/assets/home_solutions1.png';
import Solution2 from '@/assets/home_solutions2.png';
import Solution3 from '@/assets/home_solutions3.png';
import Solution4 from '@/assets/home_solutions4.png';
import Solution5 from '@/assets/home_solutions5.png';
import Solution6 from '@/assets/home_solutions6.png';

function Solutions() {
  const [selectedItem, setSelectedItem] = useState(null);

  const solutionData = [
    {
      id: 1,
      name: 'AIMS',
      desc: '원활하고 신속한 의사결정 및 위기상황에 탄력적으로 대응할 수 있는 통합업무 시스템',
      img: Solution1,
    },
    {
      id: 2,
      name: 'ACS',
      desc: 'AGV를 이용한 물류 제어 시스템으로 실시간으로 AGV Traffic 을 제어하는 솔루션',
      img: Solution2,
    },
    {
      id: 3,
      name: 'CCS',
      desc: 'Conveyor 장비 제어 시스템으로 지능형 물동 운송 지령과 각종 자동 연동이 가능한 솔루션',
      img: Solution3,
    },
    {
      id: 4,
      name: 'SCS',
      desc: 'Stocker 장비 제어 시스템으로 원격지 모니터링 및 제어가 가능한 솔루션',
      img: Solution4,
    },
    {
      id: 5,
      name: 'IDX',
      desc: 'Indexer를 제어하기 위한 프로그램으로, EQ 설비에 효율적인 Product 공급, Stocker의 물류 반송을 담당하는 솔루션',
      img: Solution5,
    },
    {
      id: 6,
      name: 'OCS',
      desc: '고속으로 이동하는 OHT 의 실시간 Traffic 제어가 가능한 OHT 물류 제어 시스템',
      img: Solution6,
    },
  ];
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <section className="hidden mx-auto flex-col items-center tablet:flex desktop:flex gap-open-5xl pt-open-6xl tablet:pt-open-7xl desktop:pt-open-7xl -text--openfoundation-white max-w-[1320px]">
      <div className="w-full flex justify-between">
        <h3 className="font-open-heading text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl">
          Open Solutions
        </h3>
        <ul className="flex justify-center items-center gap-open-lg font-open-highlight text-open-font-small tablet:text-open-font-medium desktop:text-open-font-medium">
          {solutionData.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`px-open-gutter-mobile py-open-sm rounded-3xl ${
                  selectedItem === item.id ? '-bg--open-accent-accent-2' : ''
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-between gap-open-4xl min-h-[500px]">
        <div className="w-[240px] flex flex-col items-start gap-open-3xl">
          {selectedItem ? (
            <>
              <h4 className="font-open-heading  text-open-font-xl tablet:text-open-font-xxxl desktop:text-open-font-xxxl">
                {solutionData[selectedItem - 1].name}
              </h4>
              <p className="font-open-paragraph text-open-font-medium tablet:text-open-font-large desktop:text-open-font-large">
                {solutionData[selectedItem - 1].desc}
              </p>
              <button
                type="button"
                className="font-open-label text-open-font-medium tablet:text-open-font-large desktop:text-open-font-large"
              >
                Learn More &gt;
              </button>
            </>
          ) : (
            <>
              <h4 className="font-open-heading text-open-font-xl tablet:text-open-font-xxxl desktop:text-open-font-xxxl">
                Solution 제목
              </h4>
              <p className="font-open-paragraph text-open-font-medium tablet:text-open-font-large desktop:text-open-font-large">
                솔루션에 대한 요약 설명입니다.
              </p>
            </>
          )}
        </div>
        <div
          className="flex flx-1 justify-center items-center w-full bg-cover border-none"
          style={{
            backgroundImage: selectedItem
              ? `url('${solutionData[selectedItem - 1].img}')`
              : `url('${Solution0}')`,
          }}
        />
      </div>
    </section>
  );
}

export default Solutions;
