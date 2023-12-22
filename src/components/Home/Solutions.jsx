import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Solution0 from '@/assets/home_solutions0.png';
import Solution1 from '@/assets/home_solutions1.png';
import Solution2 from '@/assets/home_solutions2.png';
import Solution3 from '@/assets/home_solutions3.png';
import Solution4 from '@/assets/home_solutions4.png';
import Solution5 from '@/assets/home_solutions5.png';
import Solution6 from '@/assets/home_solutions6.png';
import styles from './Home.module.css';

function Solutions() {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();
  const solutionData = [
    {
      id: 0,
      name: '전체보기',
      title: (
        <>
          설계부터
          <br />
          시뮬레이션까지.
        </>
      ),
      desc: '물류 자동화의 시작을 오픈에스지와 함께 해보세요.',
      img: Solution0,
      route: '/#',
    },
    {
      id: 1,
      name: 'AIMS',
      title: 'AIMS',
      desc: '원활하고 신속한 의사결정 및 위기상황에 탄력적으로 대응할 수 있는 통합업무 시스템',
      img: Solution1,
      route: '/solutions/AIMS',
    },
    {
      id: 2,
      name: 'ACS',
      title: 'ACS',
      desc: 'AGV를 이용한 물류 제어 시스템으로 실시간으로 AGV Traffic 을 제어하는 솔루션',
      img: Solution2,
      route: '/solutions/ACS',
    },
    {
      id: 3,
      name: 'CCS',
      title: 'CCS',
      desc: 'Conveyor 장비 제어 시스템으로 지능형 물동 운송 지령과 각종 자동 연동이 가능한 솔루션',
      img: Solution3,
      route: '/solutions/CCS',
    },
    {
      id: 4,
      name: 'SCS',
      title: 'SCS',
      desc: 'Stocker 장비 제어 시스템으로 원격지 모니터링 및 제어가 가능한 솔루션',
      img: Solution4,
      route: '/solutions/',
    },
    {
      id: 5,
      name: 'IDX',
      title: 'IDX',
      desc: 'Indexer를 제어하기 위한 프로그램으로, EQ 설비에 효율적인 Product 공급, Stocker의 물류 반송을 담당하는 솔루션',
      img: Solution5,
      route: '/solutions/IDX Controller',
    },
    {
      id: 6,
      name: 'OCS',
      title: 'OCS',
      desc: '고속으로 이동하는 OHT 의 실시간 Traffic 제어가 가능한 OHT 물류 제어 시스템',
      img: Solution6,
      route: '/solutions/OCS',
    },
  ];
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const handleMore = () => {
    if (selectedItem != null) {
      navigate(`${solutionData[selectedItem - 1].route}`);
    }
  };

  return (
    <section className={styles.solutions}>
      <div className="w-full flex justify-between">
        <h3 className={styles.title}>Open Solutions</h3>
        <ul className={styles.ul}>
          {solutionData.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`${styles.button} ${
                  selectedItem === item.id || (selectedItem === null && item.id === 0)
                    ? '-bg--open-accent-accent'
                    : ''
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.description}>
          {selectedItem ? (
            <>
              <h4 className={styles.title}>{solutionData[selectedItem].name}</h4>
              <p className={styles.summary}>{solutionData[selectedItem].desc}</p>
              <button type="button" className={styles.more} onClick={handleMore}>
                Learn More &gt;
              </button>
            </>
          ) : (
            <>
              <p className={`${styles.title}`}>{solutionData[0].title}</p>
              <p className={styles.summary}>
                {solutionData[0].desc}
                .
              </p>
            </>
          )}
        </div>
        <div className="w-full overflow-hidden mx-auto">
          <img
            className={styles.image}
            alt={selectedItem && solutionData[selectedItem].name}
            src={selectedItem ? `${solutionData[selectedItem].img}` : `${Solution0}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Solutions;
