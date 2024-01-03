import React, { useState } from 'react';
import styles from '@/styles/styles.module.css';
import AboutUsList from '@/components/Header/AboutUsList';
import ServiceAndSolution from '@/components/Header/ServiceAndSolution';
import SupportList from '@/components/Header/SupportList';

function SitemapMobile() {
  const [expanded, setExpanded] = useState('none');
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="100"
      data-aos-duration="1000"
      className={styles.sitemapMobile}
    >
      <ul className={styles.sitemapMobileContainer}>
        <AboutUsList accName="aboutus" expanded={expanded} setExpanded={setExpanded} />
        <ServiceAndSolution accName="service" expanded={expanded} setExpanded={setExpanded} />
        <SupportList accName="support" expanded={expanded} setExpanded={setExpanded} />
      </ul>
    </div>
  );
}

export default SitemapMobile;
