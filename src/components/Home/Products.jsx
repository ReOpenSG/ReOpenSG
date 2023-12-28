import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Product1 from '@/assets/home_products1.png';
import Product2 from '@/assets/home_products2.png';
import Product3 from '@/assets/home_products3.png';
import styles from './Home.module.css';

function Products() {
  const productData = [
    {
      id: 1,
      name: 'Solutions',
      desc: 'OpenSG의 Solution을 경험해 보세요.',
      route: '/solutions/ACS',
      imgUrl: Product1,
    },
    {
      id: 2,
      name: 'Smart Machine',
      desc: 'OpenSG의 Machine을 경험해 보세요.',
      route: '/machines/Lift Type1',
      imgUrl: Product2,
    },
    {
      id: 3,
      name: 'Smart Device',
      desc: 'OpenSG의 Device를 경험해 보세요.',
      route: '/devices/Microsoft',
      imgUrl: Product3,
    },
  ];

  return (
    <section className={styles.products}>
      <h3 className={styles.title}>Our Products</h3>
      <div className={styles.summaryWrapper}>
        <div className={styles.main} data-aos="fade-in">
          <p>스마트 자동화의</p>
          <p>모든 것.</p>
        </div>
        <p className={styles.sub} data-aos="fade-left" data-aos-delay="200">
          <span className="flex flex-col -text--open-gray-400">
            <span>기획부터 시뮬레이션까지 </span>
            <span>솔루션부터 디바이스까지</span>
          </span>
          <span className="flex flex-col">
            <span>스마트 자동화에 필요한 모든 것,</span>
            <span>OpenSG가 함께합니다.</span>
          </span>
        </p>
      </div>
      <div className={styles.cardContainer}>
        {productData.map((product, index) => (
          <Link
            to={`${product.route}`}
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            <ProductCard
              key={product.id}
              name={product.name}
              desc={product.desc}
              imgUrl={product.imgUrl}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
