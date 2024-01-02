import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Product1 from '@/assets/home_products1.png';
import Product2 from '@/assets/home_products2.png';
import Product3 from '@/assets/home_products3.png';
import styles from '@/styles/styles.module.css';
import { t } from 'i18next';

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
          <p>{t('home:products.mainKeyword.0')}</p>
          <p>{t('home:products.mainKeyword.1')}</p>
        </div>
        <p className={styles.sub} data-aos="fade-left" data-aos-delay="200">
          <span className="flex flex-col -text--open-gray-400">
            <span>{t('home:products.subKeyword.0')}</span>
            <span>{t('home:products.subKeyword.1')}</span>
          </span>
          <span className="flex flex-col">
            <span>{t('home:products.subKeyword.2')}</span>
            <span>{t('home:products.subKeyword.3')}</span>
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
              index={index}
              name={product.name}
              imgUrl={product.imgUrl}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
